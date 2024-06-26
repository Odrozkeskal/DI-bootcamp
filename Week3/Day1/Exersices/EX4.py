class Zoo:
    def __init__(self,zoo_name:str):
        self.animals = []
        self.name = zoo_name
        
    def add_animal(self, new_animal:str):
        if new_animal not in self.animals:
         self.animals.append(new_animal)
        
    def get_animals(self):
        if self.animals:
            for animal in self.animals:
                print(animal)

    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        
    def sort_animals(self):
            
            animal_dictionary = {}
            current_letter = None
            same_letter_animals = []
            self.animals.sort()
            keys = range(len(self.animals) + 1)
            
            for key, value in zip(keys, self.animals):
                animal_dictionary[key] = value
            
            for i in self.animals:
                first_letter = i[0]
                
                if first_letter != current_letter:
                    if current_letter is not None:
                        animal_dictionary[value] = same_letter_animals
                
                current_letter = first_letter
                same_letter_animals = [i]
            
            else:
                same_letter_animals.append(i)
            
            if current_letter is not None:
                animal_dictionary[current_letter] = same_letter_animals
            
            print(animal_dictionary)
    
     
        
            
           
        # print(self.animals)
        # print(animal_dictionary)
            

if __name__ == "__main__":
    zoo_name = Zoo("zoo_name")
    zoo_name.add_animal("Duck")
    zoo_name.add_animal("Ant")
    zoo_name.add_animal("Alpaca")
    zoo_name.add_animal("Worm")
    zoo_name.add_animal("Wombat")
    zoo_name.get_animals()
    zoo_name.sell_animal("Ant")

    zoo_name.get_animals()
    
    zoo_name.sort_animals()

