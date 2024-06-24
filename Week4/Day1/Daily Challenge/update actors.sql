update actors 
	set first_name='Maty' 
	where last_name='Damon' 
	and age='1970-10-08';

update actors
	set number_oscars=4
	where first_name='George' and last_name='Clooney';

alter table actors rename column age to birth_date;
