
delete from actors where actors_id = 7
returning actors_id, first_name, last_name, birth_date, number_oscars;