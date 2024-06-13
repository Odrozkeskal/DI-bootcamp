import random
def throw_dice():
    roll = random.randrange(1,7)
    return roll



def throw_until_doubles():
    throwing_cycle = 0
    while True:
        first_throwing = throw_dice()
        second_throwing = throw_dice()
        throwing_cycle +=1
        print(str(f"{first_throwing}" + "," + f"{second_throwing}"))
       
       
        if first_throwing == second_throwing:
            print("Double roll!")
            return throwing_cycle
        
print(throw_until_doubles())
        
def main():
    throwing_history = []
    for i in range(100):
        throws = 0
        while True:
            throws += 1
            if throw_until_doubles() > 0:
                throwing_history.append(throws)
                break
    total_throws = sum(throwing_history)
    print(total_throws)
print(main)