import psycopg2
from psycopg2 import Error

class MenuManager:
    def __unit__(self, connection):
        self.connection = connection
    def get_by_name(self, name):
        try:
            cursor = self.connection.cursor
            query_get_by_name = "SELECT * FROM menu_items WHERE item_name = %s;"       
            cursor.execute(query_get_by_name, (name,))     
            result = cursor.fetchone()

            cursor.close()
            return result
        except psycopg2.Error as e:
            print("Error with query: {e}")
            return None
        
if __name__ == "__main__":
    manager = MenuManager
    item_name = input(f"Enter Item Name\n")
    item = manager.get_by_name(item_name)

if item:
    print(f"There is an element: '{item_name}': {item}")
else:
    print(f"Elrement '{item_name}' is not found.")

    