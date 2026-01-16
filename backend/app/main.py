from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from .database import SessionLocal
from .fhir import patient_to_fhir, vital_to_fhir
from .models import Appointment, Consent, Notification, Patient, Payment, Record, Symptom, Teleconsultation, Vital
from .schemas import (
    AppointmentOut,
    ConsentOut,
    NotificationOut,
    PatientCreate,
    PatientOut,
    PaymentOut,
    RecordOut,
    SymptomOut,
    TeleconsultationOut,
    VitalOut,
)

app = FastAPI(title="Digital Health Platform API", version="1.0.0")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/patients", response_model=PatientOut)
def create_patient(payload: PatientCreate, db: Session = Depends(get_db)):
    patient = Patient(**payload.model_dump())
    db.add(patient)
    db.commit()
    db.refresh(patient)
    return patient


@app.get("/patients/{patient_id}", response_model=PatientOut)
def get_patient(patient_id: int, db: Session = Depends(get_db)):
    patient = db.get(Patient, patient_id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient


@app.get("/patients/{patient_id}/appointments", response_model=list[AppointmentOut])
def list_appointments(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Appointment).filter(Appointment.patient_id == patient_id).all()


@app.get("/patients/{patient_id}/records", response_model=list[RecordOut])
def list_records(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Record).filter(Record.patient_id == patient_id).all()


@app.get("/patients/{patient_id}/notifications", response_model=list[NotificationOut])
def list_notifications(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Notification).filter(Notification.patient_id == patient_id).all()


@app.get("/patients/{patient_id}/payments", response_model=list[PaymentOut])
def list_payments(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Payment).filter(Payment.patient_id == patient_id).all()


@app.get("/patients/{patient_id}/consents", response_model=list[ConsentOut])
def list_consents(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Consent).filter(Consent.patient_id == patient_id).all()


@app.get("/patients/{patient_id}/teleconsultations", response_model=list[TeleconsultationOut])
def list_teleconsultations(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Teleconsultation).filter(Teleconsultation.patient_id == patient_id).all()


@app.get("/patients/{patient_id}/vitals", response_model=list[VitalOut])
def list_vitals(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Vital).filter(Vital.patient_id == patient_id).all()


@app.get("/patients/{patient_id}/symptoms", response_model=list[SymptomOut])
def list_symptoms(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Symptom).filter(Symptom.patient_id == patient_id).all()


@app.get("/fhir/Patient/{patient_id}")
def get_fhir_patient(patient_id: int, db: Session = Depends(get_db)):
    patient = db.get(Patient, patient_id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient_to_fhir(patient)


@app.get("/fhir/Observation/{patient_id}")
def get_fhir_vitals(patient_id: int, db: Session = Depends(get_db)):
    vitals = db.query(Vital).filter(Vital.patient_id == patient_id).all()
    return [vital_to_fhir(vital) for vital in vitals]
