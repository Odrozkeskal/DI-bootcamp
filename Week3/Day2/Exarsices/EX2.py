class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, other_dog):
        power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        
        if power > other_power:
            return f"{self.name} won the fight!"
        elif other_power > power:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a draw!"


bob = Dog("Bob", 5, 68)
sam = Dog("Sam", 8, 87)

print(bob.bark())
print(bob.run_speed())
print(bob.fight(sam))