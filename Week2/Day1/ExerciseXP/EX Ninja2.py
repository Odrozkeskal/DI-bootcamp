# pt.2 Each time a user successfully sets a new longest sentence, print a congratulations message.

user_input = input("Enter the sentence ")
longest_sentence = ""

while user_input != "none":
    if len(longest_sentence) < len(user_input):
        longest_sentence = user_input
        print("Good job")
        
        user_input = input("Enter the bigger sentence ")