#It's just my notes for learning theory
class User():
    # def __init__(self, email):
    #     self.email = email
    def sign_in(self):
        print('logged in')


    def attack(self):
        print('do nothing')

class Wizard(User):
    def __init__(self, name, power):
        # super().__init__(email)
        self.name = name
        self.power = power
    
    def attack(self):
        User.attack(self)
        print(f"attacking with power of {self.power}")
        
        
class Ranger(User):
    def __init__(self, name, num_arrows):
        self.name = name
        self.num_arrows = num_arrows
    def check_arrows(self):
        print(f"{self.num_arrows} arrows left")
    def attack(self):
        print(f"attacking with arrows: arrows left: {self.num_arrows}")
    def run(self):
        print("fast running")
        
class Hybrid_Borg(Ranger,Wizard):
    def __init__(self,name,power,arrows):
        
        Wizard.__init__(self,name,power)
        Ranger.__init__(self, name,arrows)

# wizard1 = Wizard("Merlin", 50, "merlin@gmail.com")
# ranger1 = Ranger("Robin", 100)
hybrid = Hybrid_Borg("Boogie",50,100)


# print(wizard1.email)
# print(dir(wizard1))
hybrid.check_arrows()
hybrid.attack()