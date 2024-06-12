import random
notation = ("Enter the text which will be printing on shirt:")
print(notation)
text = input()
large_size = random.randrange(45,51)
medium_size = random.randrange(30,45)
any_size = random.randrange(20,51)

def make_shirt(*, shirt_size:int, text:str):
    message = f"The size of the shirt is: {shirt_size} and the text is: {text}"
    return message

print(make_shirt(shirt_size=any_size,text=text))
