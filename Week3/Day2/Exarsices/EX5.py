from EX4 import Family
class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)

    def abilities(self, **kwargs):
        kwargs['power'] = 'Unknown'
        kwargs['incredible_name'] = f"{kwargs['name']} the Incredible"
        super().born(**kwargs)

    def super_family_presentation(self):
        print(f"The {self.last_name} Incredibles Family")
        print("Family Members:")
        for member in self.members:
            print(f"  {member['incredible_name']}, {member['age']} years old, {member['gender']}, Power: {member['power']}")


if __name__ == "__main__":
    incredibles_family = TheIncredibles("Incredible")

    incredibles_family.abilities(name='Johnny_Gat', age=40, gender='Male', power='Super strength')
    incredibles_family.abilities(name='David_Kieth', age=38, gender='Female', power='Elasticity')
    incredibles_family.abilities(name='Oleg_Kirilov', age=16, gender='Female', power='Invisibility')
    incredibles_family.abilities(name='Josh_Birk', age=12, gender='Male', power='Super speed')

    # Using other methods
    print(incredibles_family.is_18('Bob'))
    print(incredibles_family.is_18('Violet'))

    incredibles_family.super_family_presentation()