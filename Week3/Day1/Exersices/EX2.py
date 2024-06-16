class Dog:
    def __init__(self, name, height) -> None:
        self.name = name
        self.height = height

def bark(self) -> None:
        print(f"{self.name} goes woof!")
def jump(self) -> None:
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high")
        
def present_dog(dog: Dog) -> None:
         print(f"Dog name: {dog.name}. Height: {dog.height}")
         
         
def get_biggest_dog(dogs:list[Dog]) -> Dog:
    biggest_dog = max(dogs, key = lambda dog: dog.height)
    return biggest_dog
def main():
    first_dog = Dog(name="Rex", height=50)
    present_dog(first_dog)
        
    second_dog = Dog("Ball", 25)
    present_dog(second_dog)
    
    biggest_dog = get_biggest_dog([first_dog,second_dog])
    print(f"{biggest_dog.name} is the biggest dog in town")
    
if __name__ == "__main__":
    main()