-- Database: public

-- DROP DATABASE IF EXISTS public;

--CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Russian_Russia.1251'
--     LC_CTYPE = 'Russian_Russia.1251'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

INSERT INTO items(products, price)
VALUES('Small Desk', 100);

INSERT INTO items(products, price)
VALUES('Large Desk', 300);

INSERT INTO items(products, price)
VALUES('Fan', 80);
