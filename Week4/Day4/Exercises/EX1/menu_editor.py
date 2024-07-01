# menu_editor.py

from menu_items import MenuItem
from menu_manager import MenuManager


def show_user_menu():
    print("Program Menu:")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("E - Exit Program")


def add_item_to_menu():
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()
    print(f"{name} was added successfully.")


def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"{name} was deleted successfully.")
    else:
        print(f"Item {name} not found.")


def update_item_from_menu():
    name = input("Enter item name to update: ")
    new_name = input("Enter new item name: ")
    new_price = int(input("Enter new item price: "))
    item = MenuManager.get_by_name(name)
    if item:
        item.update(new_name, new_price)
        print(f"{name} was updated successfully to {new_name} with price {new_price}.")
    else:
        print(f"Item {name} not found.")


def show_restaurant_menu():
    items = MenuManager.all_items()
    print("Restaurant Menu:")
    for item in items:
        print(f"{item.name} - ${item.price}")


def main():
    while True:
        show_user_menu()
        choice = input("Enter your choice: ").strip().upper()

        if choice == 'V':
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"{item.name} - ${item.price}")
            else:
                print(f"Item {name} not found.")

        elif choice == 'A':
            add_item_to_menu()

        elif choice == 'D':
            remove_item_from_menu()

        elif choice == 'U':
            update_item_from_menu()

        elif choice == 'S':
            show_restaurant_menu()

        elif choice == 'E':
            print("Exiting program.")
            show_restaurant_menu()
            break

        else:
            print("Invalid choice. Please choose again.")


if __name__ == "__main__":
    main()
