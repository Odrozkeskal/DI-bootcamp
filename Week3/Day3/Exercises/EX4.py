import datetime

def show_date():
    current_date = datetime.date.today()
    return f"{current_date}"

print(show_date())