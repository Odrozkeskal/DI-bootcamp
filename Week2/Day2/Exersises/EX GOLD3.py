names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_input = input("What is your name? ")

if user_input in names:
    user_name_index = names.index(user_input)
    print(user_name_index)

else:
    print("Your name isn't in this list, sorry")