from datetime import datetime

def counter_of_your_being(year:int, month:int, day:int):
    
    current_date = datetime.now().date()
    birthdate = datetime(year, month, day)
    
    timedelta = current_date - birthdate.date()
    minutes_lived = int(timedelta.days * 24 * 60)
    return f"You have already were {minutes_lived} minutes in this world."
    
print(counter_of_your_being(1988, 5, 15))