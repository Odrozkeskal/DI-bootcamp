#Pt. 3
import random

userInput = input("Enter anything: ")
textList = list(userInput)
random.shuffle(textList)
textRandomString = " ".join(textList)


print(textRandomString)