# Classwork exercise

class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def show_details(self):
        print("Hello my name is " + self.name)
    
    def name_change(self, new_name):
        self.name = new_name
        print(f"Name was changed {new_name}")
        return new_name


new_name = input("Enter new name: ")
first_person = Person("John", 36)
first_person.show_details()
first_person.name_change(new_name)