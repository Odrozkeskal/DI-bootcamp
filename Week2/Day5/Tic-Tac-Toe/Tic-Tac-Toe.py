import random

board = ['-', '-', '-',
         '-', '-', '-',
         '-', '-', '-']


def print_board(board):
    print(f"""
    *****************
    *   {board[0]} | {board[1]} | {board[2]}   *
    *  ---|---|---  *
    *   {board[3]} | {board[4]} | {board[5]}   *
    *  ---|---|---  *
    *   {board[6]} | {board[7]} | {board[8]}   *
    *****************
    """)


print_board(board)

character_choice = input("CHOOSE YOUR DESTINY!  X or O ").upper()
while character_choice != "X" and character_choice != "O":
    print("Incorrect value")
    character_choice = input("CHOOSE YOUR DESTINY!  X or O ").upper()

player_1 = character_choice
winner = None
game_running = True


def player_input(board):
    user_mark1 = int(input("Cell indexes: 1 (top-left-corner), 2 (top-center), 3 (top-right-corner) \n"
                           "              4 (middle-left), 5 (center-cell), 6 (middle-right)\n"
                           "              7 (bottom-left-corner), 8 (bottom-center), 9 (bottom-right-corner)\n"))
    if user_mark1 >= 1 and user_mark1 <= 9 and board[user_mark1 - 1] == '-':
        board[user_mark1 - 1] = player_1
    else:
        print("This cell is already occupied!")
    # if sum(user_mark1) % 2 !=0:
    # winner = 1


# def game_ending():
#     if sum(player_input(board)) % 2 !=0:
#         winner = 1
#         return winner
def check_horizon(board):
    global winner
    if board[0] == board[1] == board[2] and board[0] != "-":
        winner = board[0]
        return True
    elif board[3] == board[4] == board[5] and board[3] != "-":
        winner = board[3]
        return True
    elif board[6] == board[7] == board[8] and board[6] != "-":
        winner = board[6]
        return True


def check_row(board):
    global winner
    if board[0] == board[3] == board[6] and board[0] != "-":
        winner = board[0]
        return True
    elif board[1] == board[4] == board[7] and board[1] != "-":
        winner = board[1]
        return True
    elif board[2] == board[5] == board[8] and board[2] != "-":
        winner = board[2]
        return True


def check_dio(board):
    global winner
    if board[0] == board[4] == board[8] and board[0] != "-":
        winner = board[0]
        return True
    elif board[6] == board[4] == board[2] and board[6] != "-":
        winner = board[6]
        return True


def check_draw(board):
    global game_running
    if "-" not in board:
        print_board(board)
        print("Draw!")
        game_running = False


def win():
    global game_running
    if check_horizon(board) or check_row(board) or check_dio(board):
        print(f"Winner is {winner}")
        game_running = False


def switch_player():
    global player_1
    if player_1 == "X":
        player_1 = "O"
    else:
        player_1 = "X"


def opponent(board):
    while player_1 == "O":
        position = random.randint(0, 8)
        if board[position] == "-":
            board[position] = "O"
            switch_player()


while game_running:
    print_board(board)
    player_input(board)
    check_draw(board)
    win()
    switch_player()
    opponent(board)
    check_draw(board)
    win()