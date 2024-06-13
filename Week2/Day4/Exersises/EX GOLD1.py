def get_age(year, month, day):
  
    current_year = 2024
    current_month = 6
    current_day = 13
    
    age = current_year - year - ((current_month, current_day) < (month, day))
    return age
age = get_age(1965, 5, 24)
print(age)

def can_retire(gender, date_of_birth):
    
    year, month, day = map(int, date_of_birth.split('/'))

 
    retirement_age_male = 67
    retirement_age_female = 62

   
    age = get_age(year, month, day)

   
    if gender == 'm':
        retirement_age = retirement_age_male
    elif gender == 'f':
        retirement_age = retirement_age_female
    else:
        print("Invalid gender provided.")
        return False

   
    if age >= retirement_age:
        return True
    else:
        return False
    
gender = input("Enter your gender (m/f): ").lower()
date_of_birth = input("Enter your date of birth (yyyy/mm/dd) use / symbol between valuesm: ")


retire_status = can_retire(gender, date_of_birth)


if retire_status:
    print("You can retire.")
else:
    print("You can't retire yet.")
    
