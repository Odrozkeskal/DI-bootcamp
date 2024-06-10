our_list = []

user_input1 = input("Enter a first numbers: ")
user_input2 = input("Enter a second numbers: ")
user_input3 = input("Enter a third numbers: ")

our_list.append(int(user_input1))
our_list.append(int(user_input2))
our_list.append(int(user_input3))


print(f"The greatest number is: {max(our_list)}")