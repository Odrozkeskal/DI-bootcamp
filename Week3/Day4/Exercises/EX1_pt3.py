import random


def get_words_from_file(file_path):
    words = []
    try:
        with open(file_path, mode='r') as file:
            for line in file:
                words.extend(line.split())
    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")
    except IOError as e:
        print(f"Error: An IOError occurred. Details: {e}")
    except Exception as e:
        print(f"Error: An unexpected error occurred. Details: {e}")
    
    return words


def get_random_sentence(length, words):
    if length <= 0:
        return "Length should be greater than zero."
    
    sentence_words = random.sample(words, length)
    sentence = ' '.join(sentence_words)
    
    return sentence

def main():
    print("Welcome to the Random Sentence Generator!")
    
   
    file_path = r'C:\Users\Mariy\Desktop\DI-bootcamp\Week3\Day4\Exercises\words_list.txt'
    words = get_words_from_file(file_path)
    
    while True:
        try:
            length = int(input("How long do you want the sentence to be (between 2 and 20)? "))
            if 2 <= length <= 20:
                break
            else:
                print("Error: Please enter a number between 2 and 20.")
        except ValueError:
            print("Error: Please enter a valid integer.")
    
    random_sentence = get_random_sentence(length, words)
    print(f"\nRandom sentence of length {length}:")
    print(random_sentence)


if __name__ == "__main__":
    main()