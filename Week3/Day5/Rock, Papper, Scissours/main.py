# def greet() -> None:
#     print("Hello!")
#
# def bye() -> None:
#     print("Bye!")
#
#
# def main() -> None:
#     greet()
#     bye()
#
# if __name__ == "__main__":
#     main()
def enter_club(name:str, age:int, has_id:bool) -> None:
    if name.lower() == 'bob':
        print("Get out of here Bob")
        return
    if age >= 21 and has_id:
        print("You may enter the club")
    else:
        print("You may not enter the club")
        
def main() -> None:
    enter_club('Bob', 29, has_id=True)
    enter_club('James', 29, has_id=True)
    enter_club('Sandra', 29, has_id=False)
    enter_club('Mario', 20, has_id=True)
    enter_club('Bob', 29, has_id=True)
    
if __name__ == '__main__':
    main()