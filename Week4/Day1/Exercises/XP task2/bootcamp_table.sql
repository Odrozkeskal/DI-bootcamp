CREATE TABLE students(
	students_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	birth_date DATE NOT NULL
)