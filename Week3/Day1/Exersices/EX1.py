class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

Cat1 = Cat("Mona", 2)
Cat2 = Cat("Lily",4)
Cat3 = Cat("Coal", 3)

# print(Cat1.name)
# print(Cat2.name)
# print(Cat3.name)

cats_list = [Cat1, Cat2, Cat3]

def old_cat_finder(cats_list):
    old_list = []
    for i in cats_list:
        # print(i.name)
        old_list.append(i)
        old_list.sort(key=lambda x: x.age, reverse=True)
        # old_list.sort(reverse=True)
    
    if old_list:
        oldest_cat = old_list[0]
        print(f"The name of the oldest cat is: {oldest_cat.name}")
    
    
if __name__ == "__main__":
    old_cat_finder(cats_list)
        
# print(oldest_cat)