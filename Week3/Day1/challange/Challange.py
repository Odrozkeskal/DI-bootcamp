class Farm():
    def __init__(self,name:str):
      self.name = name
      self.animals = {}
      self.animal_types = []
     
      
    def add_animal(self,new_animal:str,quantity:int = 1):
       
        if new_animal in self.animals:
           self.animals[new_animal] += quantity
        else:
            self.animals[new_animal] = quantity
    
    def get_animal_types(self):
        
        for animal, quantity in self.animals.items():
            self.animal_types.append(animal)
            
        print(self.animal_types)
        
    def get_more_info(self):
         print(f"McDonald’s farm has {self.animal_types}")
     
    def get_info(self):
        print(f"{self.name}'s farm")
        if self.animals:
            for animal, quantity in self.animals.items():
                print(f"{animal} : {quantity}")
    
        
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('goat',12)
macdonald.add_animal("sheep")
macdonald.add_animal("sheep")
macdonald.add_animal("sheep")
macdonald.add_animal("horse")
macdonald.add_animal('bee',1253)

macdonald.get_info()
macdonald.get_animal_types()
macdonald.get_more_info()

# quiz

# 1. Create a class called Farm. How should it be implemented?
# Answer: It's should implement with variable, like this: macdonald = Farm("McDonald"), now
# the variable macdonald get access to any method of Farm class

# 2. Does the Farm class need an __init__ method? If so, what parameters should it take?
# Answer: Yes, it's needs __init__ method because we need to use a variables from this class, but first
# we must declorate them. We need a name variable, to name the farm, and also we need a dictionary of animals
# so the variables will be self.name = name, and self.animals = {}

#3. How many methods does the Farm class need?
# Answer: Farm class needs 3 methods, including a "root-method" __init__. The method which adds animals into animals
# dictionary, and method which print the name of farm, and the animal dictionary.

#4. Do you notice anything interesting about the way we are calling the add_animal method? What parameters
# should this function have? How many…?
# Answer: Yes, we need to do the argument which will get the value of quantity of animals, as unnessesary argument
# we need to achive that Python woldn't trow the error. So wee need to add "=1", after quantity parameter. Also
# we should make a counter of dublicate arguments (same animals adding), so I used
# self.animals[new_animal] += quantity in condition if animal is already in dictionary.

