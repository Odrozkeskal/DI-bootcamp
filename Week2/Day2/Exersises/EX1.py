my_fav_numbers = {0, 1, 2, 3, 4}
my_fav_numbers.add(24)
my_fav_numbers.add(25)
my_fav_numbers.remove(25)
print(my_fav_numbers)

friend_fav_numbers = {66,77,88}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)