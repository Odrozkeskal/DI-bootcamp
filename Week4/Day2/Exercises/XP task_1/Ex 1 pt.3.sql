-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers
ORDER BY first_name ASC
LIMIT 3