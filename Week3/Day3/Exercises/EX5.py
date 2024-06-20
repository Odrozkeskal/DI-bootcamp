import datetime

def new_year_counter():
    current_date = datetime.date.today()
    next_year = current_date.year + 1
    new_year_date = datetime.date(next_year, 1 ,1)
    until_ny_remeining =  new_year_date - current_date
    hours, remainder = divmod(until_ny_remeining.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    return f"New year will come in {until_ny_remeining.days} days, {hours} hours, {minutes} minutes, {seconds} seconds"

print(new_year_counter())

