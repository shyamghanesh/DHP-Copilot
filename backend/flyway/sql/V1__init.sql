CREATE TABLE IF NOT EXISTS patients (
  id SERIAL PRIMARY KEY,
  external_id VARCHAR(64) UNIQUE NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  date_of_birth DATE,
  blood_type VARCHAR(8),
  primary_hospital VARCHAR(120),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  doctor_name VARCHAR(120) NOT NULL,
  hospital_name VARCHAR(120) NOT NULL,
  scheduled_date VARCHAR(32) NOT NULL,
  scheduled_time VARCHAR(32) NOT NULL,
  appointment_type VARCHAR(32) NOT NULL,
  status VARCHAR(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS records (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  title VARCHAR(160) NOT NULL,
  record_type VARCHAR(64) NOT NULL,
  document_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notifications (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  message VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  description VARCHAR(160) NOT NULL,
  amount VARCHAR(32) NOT NULL,
  status VARCHAR(32) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  invoice_url TEXT
);

CREATE TABLE IF NOT EXISTS consents (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  scope VARCHAR(120) NOT NULL,
  enabled BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS teleconsultations (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  doctor_name VARCHAR(120) NOT NULL,
  mode VARCHAR(32) NOT NULL,
  scheduled_date VARCHAR(32) NOT NULL,
  scheduled_time VARCHAR(32) NOT NULL,
  status VARCHAR(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS vitals (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  metric VARCHAR(80) NOT NULL,
  value VARCHAR(80) NOT NULL,
  recorded_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS symptoms (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  recorded_at TIMESTAMP DEFAULT NOW()
);
