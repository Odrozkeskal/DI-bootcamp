users_fav_book = input("Enter the name of your favorite book " )
title = users_fav_book
def favorite_book(title):
    message = (f"One of my favorite books is {title}")
    return message
print(favorite_book(title))