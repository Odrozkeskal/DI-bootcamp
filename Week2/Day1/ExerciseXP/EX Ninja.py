# Exercise 3 : Outputs

# 3 <= 3 < 9  - True
# 3 == 3 == 3 - True
# bool(0) - False
# bool(5 == "5") - False
# bool(4 == 4) == bool("4" == "4") - True
# bool(bool(None)) - False

# x = (1 == True) - True
# y = (1 == False) - False
#a = True + 4 - a:5
#b = False + 10 - b:10


# Exercise 4 : How Many Characters In A Sentence ?

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
my_list = list(my_text)
print(len(my_list))

# Exercise 5: Longest Word Without A Specific Character

# Pt.1 Keep asking the user to input the longest sentence they can without the character “A”.

user_input = input("Enter the sentence's without 'A' letter ")
text_list = user_input.upper()
# print(text_list)


while "A" in text_list:
    print("No 'A' letter, please ")
    text_list = input("Enter the sentence's without 'A' letter ")
    



