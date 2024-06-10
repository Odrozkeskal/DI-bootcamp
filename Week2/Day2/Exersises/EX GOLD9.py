import random

player_input = input("Enter the number from 1 to 9: ")
number_input = int(player_input)
number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
guessed_num = int(random.choice(number_list))
wins = 0
loses = 0
while player_input != "quit":
    print(f"You wished number {number_input}")
    
    print(f"And guessed number was... {guessed_num}")
    
    if number_input == guessed_num:
        wins += 1
        print("Winner")
    
    else:
        loses += 1
        print("Better luck next time")
    
    player_input = input("Enter the number from 1 to 9: ")

print(f"You won {wins} times")
print(f"You lose {loses} times")