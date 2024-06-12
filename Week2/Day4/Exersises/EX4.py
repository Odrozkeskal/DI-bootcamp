import random

num = input("Enter a wished number, in 1 - 100 range: ")
num = int(num)
def random_number(*,num:int):
    if 1 <= num <= 100:
        random_result = random.randrange(1,101)
    else:
        random_result ="Use a number in 1 - 100 range"
    
    return random_result
    

print(random_number(num=num))

if random_number(num=num) == num:
    print("success your wished number is the same with program's number")
else:
    print("fail")
    print(f"You wished a number {num}")
    print(f"Program returned number: {random_number(num=num)}")