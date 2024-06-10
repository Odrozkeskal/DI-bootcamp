user_input = input("Enter the name ")

while user_input != "Paul":
    print("Access denied")
    user_input = input("Enter the name ")
    if user_input == "Paul":
        print("Access is allowed")
        break