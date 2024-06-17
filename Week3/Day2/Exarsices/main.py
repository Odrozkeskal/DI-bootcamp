#It's just my notes for learning theory
class User():
    
    def sign_in(self):
        print('logged in')


    def attack(self):
        print('do nothing')

class Wizard(User):
    def __init__(self, name, power):
        self.name = name
        self.power = power
    
    def attack(self):
        User.attack(self)
        print(f"attacking with power of {self.power}")
        
        
class Ranger(User):
    def __init__(self, name, num_arrows):
        self.name = name
        self.num_arrows = num_arrows
    
    def attack(self):
        print(f"attacking with arrows: arrows left: {self.num_arrows}")


wizard1 = Wizard("Merlin", 50)
ranger1 = Ranger("Robin", 100)

def player_attack(char):
    char.attack()
    
for char in [wizard1,ranger1]:
    char.attack()
    
