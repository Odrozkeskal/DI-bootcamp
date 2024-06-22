from anagram_checker import AnagramChecker


def display_menu():
    print("xxx Anagram Checker xxx")
    print("1. Enter a word")
    print("2. Exit")
    choice = input("Enter your choice (1 or 2): ").strip()
    return choice


def validate_input(user_input):
    if len(user_input.split()) != 1:
        print("Error: Please enter only one word.")
        return False
    
    if not user_input.isalpha():
        print("Error: Only alphabetic characters are allowed.")
        return False
    
    return True


def main():
    checker = AnagramChecker('text file.txt')
    
    while True:
        choice = display_menu()
        
        if choice == '1':
            user_word = input("Enter a word: ").strip().lower()
            
            if validate_input(user_word):
                if checker.is_valid_word(user_word):
                    print(f"YOUR WORD: \"{user_word.capitalize()}\"")
                    print("This is a valid English word.")
                    anagrams = checker.get_anagrams(user_word)
                    if anagrams:
                        print(f"Anagrams for your word: {', '.join(anagrams)}.\n")
                    else:
                        print(f"No anagrams found for {user_word}.\n")
                else:
                    print(f"\"{user_word.capitalize()}\" is not a valid English word.\n")
        elif choice == '2':
            print("Exiting the program.")
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")


if __name__ == "__main__":
    main()