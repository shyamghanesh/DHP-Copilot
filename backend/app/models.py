from datetime import datetime
from typing import Optional

from sqlalchemy import Boolean, Date, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .database import Base


class Patient(Base):
    __tablename__ = "patients"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    external_id: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    full_name: Mapped[str] = mapped_column(String(120))
    date_of_birth: Mapped[Optional[datetime]] = mapped_column(Date, nullable=True)
    blood_type: Mapped[Optional[str]] = mapped_column(String(8), nullable=True)
    primary_hospital: Mapped[Optional[str]] = mapped_column(String(120), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    appointments: Mapped[list["Appointment"]] = relationship(back_populates="patient")
    records: Mapped[list["Record"]] = relationship(back_populates="patient")
    notifications: Mapped[list["Notification"]] = relationship(back_populates="patient")
    payments: Mapped[list["Payment"]] = relationship(back_populates="patient")
    consents: Mapped[list["Consent"]] = relationship(back_populates="patient")
    teleconsultations: Mapped[list["Teleconsultation"]] = relationship(back_populates="patient")
    vitals: Mapped[list["Vital"]] = relationship(back_populates="patient")
    symptoms: Mapped[list["Symptom"]] = relationship(back_populates="patient")


class Appointment(Base):
    __tablename__ = "appointments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    doctor_name: Mapped[str] = mapped_column(String(120))
    hospital_name: Mapped[str] = mapped_column(String(120))
    scheduled_date: Mapped[str] = mapped_column(String(32))
    scheduled_time: Mapped[str] = mapped_column(String(32))
    appointment_type: Mapped[str] = mapped_column(String(32))
    status: Mapped[str] = mapped_column(String(32))

    patient: Mapped[Patient] = relationship(back_populates="appointments")


class Record(Base):
    __tablename__ = "records"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    title: Mapped[str] = mapped_column(String(160))
    record_type: Mapped[str] = mapped_column(String(64))
    document_url: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    patient: Mapped[Patient] = relationship(back_populates="records")


class Notification(Base):
    __tablename__ = "notifications"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    message: Mapped[str] = mapped_column(String(200))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    read: Mapped[bool] = mapped_column(Boolean, default=False)

    patient: Mapped[Patient] = relationship(back_populates="notifications")


class Payment(Base):
    __tablename__ = "payments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    description: Mapped[str] = mapped_column(String(160))
    amount: Mapped[str] = mapped_column(String(32))
    status: Mapped[str] = mapped_column(String(32))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    invoice_url: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    patient: Mapped[Patient] = relationship(back_populates="payments")


class Consent(Base):
    __tablename__ = "consents"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    scope: Mapped[str] = mapped_column(String(120))
    enabled: Mapped[bool] = mapped_column(Boolean, default=True)

    patient: Mapped[Patient] = relationship(back_populates="consents")


class Teleconsultation(Base):
    __tablename__ = "teleconsultations"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    doctor_name: Mapped[str] = mapped_column(String(120))
    mode: Mapped[str] = mapped_column(String(32))
    scheduled_date: Mapped[str] = mapped_column(String(32))
    scheduled_time: Mapped[str] = mapped_column(String(32))
    status: Mapped[str] = mapped_column(String(32))

    patient: Mapped[Patient] = relationship(back_populates="teleconsultations")


class Vital(Base):
    __tablename__ = "vitals"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    metric: Mapped[str] = mapped_column(String(80))
    value: Mapped[str] = mapped_column(String(80))
    recorded_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    patient: Mapped[Patient] = relationship(back_populates="vitals")


class Symptom(Base):
    __tablename__ = "symptoms"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    patient_id: Mapped[int] = mapped_column(ForeignKey("patients.id"))
    description: Mapped[str] = mapped_column(Text)
    recorded_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    patient: Mapped[Patient] = relationship(back_populates="symptoms")
