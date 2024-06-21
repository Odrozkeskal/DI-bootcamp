def get_words_from_file(file_path):
    words = []
    with open(file_path, 'r') as file:
        for line in file:
            words.extend(line.split())
    return words

file_path = r'C:\Users\Mariy\Desktop\DI-bootcamp\Week3\Day4\Exercises\words_list.txt'
words = get_words_from_file(file_path)

if words:
    print(f"Words read from file: {words}")
else:
    print("No words were read from the file.")