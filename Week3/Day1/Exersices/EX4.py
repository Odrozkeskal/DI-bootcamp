class Zoo:
    def __init__(self, zoo_name: str) -> None:
        self.animals = []
        self.zoo_name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)

        sorted_grouped_animals = {}
        counter = 1
        for key in sorted(grouped_animals.keys()):
            sorted_grouped_animals[counter] = grouped_animals[key]
            counter += 1

        return sorted_grouped_animals

    def get_groups(self):
        grouped_animals = self.sort_animals()
        for group, animals in grouped_animals.items():
            print(group, animals, sep=": ")
            

zoo = Zoo("Zoo")

zoo.add_animal("Girafe")
zoo.add_animal("Lion")
zoo.add_animal("Hipo")
zoo.add_animal("Monkey")

zoo.sort_animals()
zoo.get_groups()

