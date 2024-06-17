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
        
wizard1 = Wizard("Gale", 45)
wizard1.attack()