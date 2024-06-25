SELECT * FROM customer;

SELECT first_name, 	last_name AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_Id, title, description, release_year, replacement_cost FROM film 
	ORDER BY replacement_cost ASC;

SELECT a.address, a.phone 
	FROM address a
	JOIN customer c ON a.address_id = c.address_id
	WHERE a.district = 'Texas';

SELECT film_id, title, description, length, replacement_cost
	FROM film
	WHERE title = 'your favorite movie';

SELECT film_id, title, description, length, replacement_cost 
	FROM film
	WHERE title LIKE 'My%';

SELECT * FROM film ORDER BY replacement_cost ASC
	LIMIT 10;

SELECT * FROM film WHERE film_id between 11 AND 21
	ORDER BY replacement_cost ASC;

SELECT DISTINCT 
	c.first_name, c.last_name,
	p.amount, p.payment_date
	FROM customer c
	JOIN payment p 
	ON c.customer_id = p.customer_id;

SELECT * FROM film
	WHERE film_id NOT IN
	(SELECT film_id FROM inventory)

SELECT DISTINCT c.country, ci.city
	FROM country c
	JOIN city ci ON c.country_id = ci.country_id;

SELECT 
    p.customer_id, 
    c.first_name, 
    c.last_name, 
    p.amount, 
    p.payment_date, 
    p.staff_id
FROM 
    payment p
JOIN 
    customer c ON p.customer_id = c.customer_id;