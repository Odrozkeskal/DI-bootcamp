import random
import string

def random_string(length):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(length))

random_string = random_string(5)
print(random_string)