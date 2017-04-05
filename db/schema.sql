BEGIN;

DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  user_id SERIAL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phone_number INTEGER NOT NULL,
  status VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

COMMIT;







