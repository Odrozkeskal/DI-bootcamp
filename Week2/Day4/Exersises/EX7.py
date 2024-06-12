import random

def get_random_temp():
    temp = random.randrange(-10, 41)
    return temp

print(get_random_temp())

def main():
    temp_result = get_random_temp()
    message = f"The temperature right now is: {temp_result} degrees Celsius."
    if temp_result < 0:
        message_with_advice = message + "Brrr, that’s freezing! Wear some extra layers today"
    elif temp_result >= 0 and temp_result <= 16:
        message_with_advice = message + "Quite chilly! Don’t forget your coat"
    elif temp_result >= 16 and temp_result <= 23:
        message_with_advice = message + "Today is a perfect weather"
    elif temp_result >= 24 and temp_result <= 32:
        message_with_advice = message + "Carefull, it's hot today"
    elif temp_result >= 32 and temp_result <= 40:
        message_with_advice = message + "Iferno's enclave is here"
    return message_with_advice
print(main())


def get_random_temp_seasons(*, season: str):
   
    if season == "winter":
        temp = random.randrange(-30, 5)
        temp = float(temp)
    elif season == "spring":
        temp = random.randrange(-2, 21)
        temp = float(temp)
    elif season == "summer":
        temp = random.randrange(15, 41)
        temp = float(temp)
    elif season == "autumn":
        temp = random.randrange(-2, 21)
        temp = float(temp)
    
    
    return temp


print(get_random_temp_seasons(season="autumn"))

user_input_month_number = input("Enter a month number: ")
month = int(user_input_month_number)
def month_into_season(*, month:int):
    if month == 12 or month == 1 or month == 2:
        season = "winter"
    elif month in range(3,6):
        season = "spring"
    elif month in range(6,9):
        season = "summer"
    elif month in range(9,12):
        season = "autumn"
    elif month == 0:
        season = "incorrect value"
    return season
print(month_into_season(month=month))