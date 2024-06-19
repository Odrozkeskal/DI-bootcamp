class Family:
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name
    
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                return member['age'] >= 18
        else: return False
    

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        print("Family Members:")
        for member in self.members:
            print(f"  {member['name']}, {member['age']} years old, {member['gender']}")
            
fam = Family("Bovitos")

fam.members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False},
    {'name': 'Birg', 'age': 5, 'gender': 'Female', 'is_child': True}
]

fam.born(name='Emily', age=0, gender='Female', is_child=True)
fam.born(name='Kevin', age=7, gender='Male', is_child=True)



print(fam.is_18('Birg'))

fam.family_presentation()