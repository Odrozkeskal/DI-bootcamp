user_input = input("Enter 7 words: ")
words = list(user_input.split(" "))
print(words)

user_input2 = input("Input any symbol: ")
letter = user_input2

for i in words:
    if letter in i:
        print(f"The index of first appearance {letter} symbol in list {words.index(i)}")
    else:
        print(f"Sorry, but there is no {letter} symbol in {i}")