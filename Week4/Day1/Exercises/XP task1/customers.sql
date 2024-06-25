-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Russian_Russia.1251'
--     LC_CTYPE = 'Russian_Russia.1251'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE customers(
	customers_id SERIAL PRIMARY KEY,
	fisrt_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(100) NOT NULL
)