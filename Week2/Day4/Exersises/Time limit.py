print("Enter any sentence:")

sentence_input = input()
print("Enter character you need: ")
character_input = input()
def char_counter(sentence_input, character_input):
    counter = 0
    for c in sentence_input:
        if c == character_input:
            counter += 1
    return counter

print(char_counter(sentence_input, character_input))
