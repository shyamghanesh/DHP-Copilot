from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel


class PatientBase(BaseModel):
    external_id: str
    full_name: str
    date_of_birth: Optional[date] = None
    blood_type: Optional[str] = None
    primary_hospital: Optional[str] = None


class PatientCreate(PatientBase):
    pass


class PatientOut(PatientBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class AppointmentOut(BaseModel):
    id: int
    patient_id: int
    doctor_name: str
    hospital_name: str
    scheduled_date: str
    scheduled_time: str
    appointment_type: str
    status: str

    class Config:
        from_attributes = True


class RecordOut(BaseModel):
    id: int
    patient_id: int
    title: str
    record_type: str
    document_url: str
    created_at: datetime

    class Config:
        from_attributes = True


class NotificationOut(BaseModel):
    id: int
    patient_id: int
    message: str
    created_at: datetime
    read: bool

    class Config:
        from_attributes = True


class PaymentOut(BaseModel):
    id: int
    patient_id: int
    description: str
    amount: str
    status: str
    created_at: datetime
    invoice_url: Optional[str] = None

    class Config:
        from_attributes = True


class ConsentOut(BaseModel):
    id: int
    patient_id: int
    scope: str
    enabled: bool

    class Config:
        from_attributes = True


class TeleconsultationOut(BaseModel):
    id: int
    patient_id: int
    doctor_name: str
    mode: str
    scheduled_date: str
    scheduled_time: str
    status: str

    class Config:
        from_attributes = True


class VitalOut(BaseModel):
    id: int
    patient_id: int
    metric: str
    value: str
    recorded_at: datetime

    class Config:
        from_attributes = True


class SymptomOut(BaseModel):
    id: int
    patient_id: int
    description: str
    recorded_at: datetime

    class Config:
        from_attributes = True
