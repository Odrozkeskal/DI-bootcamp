class AnagramChecker:
    def __init__(self, word_list_file):
        self.wordlist = self.load_list_file(word_list_file)
    
    def load_list_file(self, word_list_file):
        with open(word_list_file, mode='r') as file:
            words = file.read().splitlines()
        return set(words)
    
    def is_valid_word(self, word):
        return word in self.wordlist
    
    def get_anagrams(self, word):
        sorted_word = ''.join(sorted(word.lower()))
        anagrams = [w for w in self.wordlist if ''.join(sorted(w.lower())) == sorted_word and w.lower() != word.lower()]
        return anagrams


if __name__ == "__main__":
    checker = AnagramChecker('text file.txt')
    
    user_word = input("Enter a word: ").strip().lower()
    
    if checker.is_valid_word(user_word):
        print(f"{user_word} is a valid word.")
        anagrams = checker.get_anagrams(user_word)
        if anagrams:
            print(f"Anagrams of {user_word}: {anagrams}")
        else:
            print(f"No anagrams found for {user_word}.")
    else:
        print(f"{user_word} is not a valid word.")