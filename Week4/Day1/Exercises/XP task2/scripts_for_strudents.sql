SELECT * FROM students;
SELECT first_name, last_name FROM students;
SELECT * FROM students WHERE students_id = 2;
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name ='Marc';
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name ='Marc';
SELECT * FROM students WHERE first_name LIKE '%a%';
SELECT first_name FROM students WHERE first_name LIKE 'A%';
SELECT * FROM students WHERE first_name LIKE '%a';
SELECT * FROM students WHERE first_name LIKE '_%a_';
SELECT * FROM students WHERE students_id = 1 OR students_id = 3;
