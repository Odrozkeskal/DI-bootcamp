def letters_corrector(word):
    result = ""
    previous_char = None
    for char in word:
        if char != previous_char:
            result += char
            previous_char = char
    return result

user_input = input("Enter any word: ")
correct_string = letters_corrector(user_input)

print(correct_string)

#########################################################################################
#Alternative way

def letters_corrector(word):
    result = word[0]
    previous_char = word[0]
    for char in word[1:]:
        if char != previous_char:
            result += char
            previous_char = char
    return result