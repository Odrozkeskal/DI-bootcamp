# EX 9 Pt.1

user_input = input("Enter the age of each person of your group. Type '0' for finishing  ")
integer_input = int(user_input)
ticket_cost_counter = 0

while integer_input != 0:

     if integer_input < 3:
         ticket_cost_counter += 0
     elif integer_input > 3 and integer_input < 12:
         ticket_cost_counter += 10
     elif integer_input > 12:
         ticket_cost_counter += 15

     user_input = input("Add a group member? Enter the age to add a group member. Type '0' for finishing ")
     integer_input = int(user_input)


print(f"Total ticket cost: {ticket_cost_counter}")

# EX 9 Pt.2

name_input = input("Please, enter your name for order the ticket. Type 'quit' for finishing. Name: ")
name_list =[]
while name_input != "quit":

    name_list.append(name_input)
    age_input = input(f"Hello, {name_input}. Enter your age please. Age: ")
    integer_age = int(age_input)


    if integer_age <= 15 or integer_age >= 22:
        name_list.remove(name_input)
        print("Sorry, you're not allowed to watch this movie")

    name_input = input("Please, enter your name for order the ticket. Type 'quit' for finishing. Name: ")





print(f"The list of allowed customers {name_list} ")