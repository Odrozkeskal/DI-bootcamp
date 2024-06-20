from faker import Faker
import random

fake_data = Faker()

users = []

def add_user():
    name = fake_data.name()
    address = fake_data.address()
    language_code = random.choice(["en","jp","ch","fr"])
    
    user = {
        'name': name,
        'address': address,
        'language_code': language_code
    }
    users.append(user)
for _ in range(4):
    add_user()
    
for user in users:
    print(user)
