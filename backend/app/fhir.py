from datetime import datetime
from typing import Any, Dict

from fhir.resources.observation import Observation
from fhir.resources.patient import Patient as FhirPatient

from .models import Patient, Vital


def patient_to_fhir(patient: Patient) -> Dict[str, Any]:
    resource = FhirPatient(
        id=str(patient.id),
        identifier=[{"system": "urn:dhp:patient", "value": patient.external_id}],
        name=[{"text": patient.full_name}],
        birthDate=patient.date_of_birth.isoformat() if patient.date_of_birth else None,
    )
    return resource.model_dump(exclude_none=True)


def vital_to_fhir(vital: Vital) -> Dict[str, Any]:
    resource = Observation(
        id=str(vital.id),
        status="final",
        code={"text": vital.metric},
        valueString=vital.value,
        effectiveDateTime=vital.recorded_at.isoformat() if isinstance(vital.recorded_at, datetime) else None,
    )
    return resource.model_dump(exclude_none=True)
