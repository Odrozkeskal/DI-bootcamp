user_input = input("Enter few words separated by coma: ")

user_input_list = list(user_input.split(","))
user_input_sorted_list = sorted(user_input_list)
user_sorted_input_string = ",".join(user_input_sorted_list)

print(user_sorted_input_string)
