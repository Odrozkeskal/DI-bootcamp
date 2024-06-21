from EX1_pt1 import get_words_from_file

import random

def get_random_sentence(length, words):
    if length <= 0:
        return "Length should be greater than zero."

    sentence_words = random.sample(words, length)
    sentence = ' '.join(sentence_words)
    return sentence

file_path = r'C:\Users\Mariy\Desktop\DI-bootcamp\Week3\Day4\Exercises\words_list.txt'
words = get_words_from_file(file_path)

sentence_length = 8
random_sentence = get_random_sentence(sentence_length, words)

print(f"Random sentence: {random_sentence}")