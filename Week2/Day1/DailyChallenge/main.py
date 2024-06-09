# Pt.1
userInput = input("Enter a string with 10 characters: ")
stringLength = (len(userInput))
if stringLength > 10:
    print("String is too long")
elif stringLength < 10:
    print("String is too short")
else:

    print("Correct string length. Please, continue")
    print(userInput[0], userInput[-1])


