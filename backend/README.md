# Digital Health Platform API

FastAPI backend for the Digital Health Platform patient mobile app. It uses PostgreSQL with SQLAlchemy and Flyway migrations, and exposes FHIR-compliant resources for patient data.

## Features
- Patient profile management
- Appointments, teleconsultations, and hospital availability integration
- Secure health record access (lab results, imaging, prescriptions)
- Notifications and reminders
- Payments and invoice history
- Consent-based data sharing
- FHIR Patient and Observation endpoints

## Environment variables
- `DHP_DATABASE_URL` (default: `postgresql+psycopg2://dhp:dhp@localhost:5432/dhp`)

## Run locally
1. Create a Python environment and install requirements.
2. Configure PostgreSQL and run Flyway migrations in `flyway/`.
3. Start the API with `uvicorn app.main:app --reload`.

## FHIR endpoints
- `GET /fhir/Patient/{patient_id}`
- `GET /fhir/Observation/{patient_id}`
