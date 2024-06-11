family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_ticket_counter = 0
age = 0

for p in family:
    age = family[p]
    
    if age < 3:
        current_ticket_count = 0
        total_ticket_counter += 0
        print(f"{p} should pay {current_ticket_count}")
    elif age >= 3 and age <= 12:
        current_ticket_count = 10
        total_ticket_counter += 10
        print(f"{p} should pay {current_ticket_count}")
    elif age > 12:
        current_ticket_count = 15
        total_ticket_counter += 15
        print(f"{p} should pay {current_ticket_count}")

print(f"Whole family should pay: {total_ticket_counter}")