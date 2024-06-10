user_fruits = input("Enter your favorite fruit. Separate the fruit with space ")
fruit_list = list(user_fruits.split(" "))
print(fruit_list)
for i in fruit_list:
    fruit = i

second_input = input("Enter any name of fruit ")
second_fruit_list = list(second_input.split(" "))
print(second_fruit_list)
for j in second_fruit_list:
    if j == fruit:
        print("You chose one of your favorite fruits! Enjoy!")
    elif j != fruit:
        print("You chose a new fruit. I hope you enjoy")