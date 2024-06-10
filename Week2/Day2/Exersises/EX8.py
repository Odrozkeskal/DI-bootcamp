user_input = input("Enter a series of pizza toppings. Enter word: 'quit' for finishing  ")
basic_cost = 10
topping_counter = 0
user_choise = []
while user_input != "quit":
    topping_counter += 2.5
    print(f"{user_input} topping adding into your pizza")
    user_input = input("Anything else? ")
    user_choise.append(user_input)

print(f"You choose: {user_choise} as a topping for pizza")
print(f"Total pizza cost {basic_cost + topping_counter}")