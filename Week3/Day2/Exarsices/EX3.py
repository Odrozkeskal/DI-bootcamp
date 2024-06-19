from EX2 import Dog
from random import choice

class PetDog(Dog):
    def __init__(self,name,age,weight):
        super().__init__(name, age, weight)
        self.trained = False
        
    def train(self):
        print(super().bark())
        self.trained = True
       
    def play(self, *args):
        dog_names = ', '.join(dog.name for dog in args)
        print(f"{dog_names} all play together")
        
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(choice(tricks))
        else:
            print(f"{self.name} is not trained yet")
        
if __name__ == "__main__":
    vini = PetDog("Vini", 3, 26)
    anver = PetDog("Anver", 5, 42)

vini.train()
print(vini.trained)

vini.do_a_trick()

anver.play(anver,vini)