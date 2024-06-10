alphabet = "abcdefghijklmopqrstuvwxyz"

def is_letter_vowel(letter):
    vowel_letter = "aeiouy"
    return letter in vowel_letter


for letter in alphabet:
    if is_letter_vowel(letter):
        print(f"{letter} is a vowel.")
    else:
        print(f"{letter} is a consonant.")