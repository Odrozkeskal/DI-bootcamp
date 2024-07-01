import psycopg2
from psycopg2 import Error

class MenuItem:
    def __init__(self, name:str, price:int =0):
        self.name = name
        self.price = price
       
    def connect(self):
        # create a def for connect to db
        # this allows called function for connect in other methods
        try:
            connection = psycopg2.connect(
            host="localhost",
            user="posgres",
            password="pkfnjujhmt2",
            dbname="memu_items"   
            )
            return connection
        except Error as e:
            print(f"error for connect: {e}")   
        
    def tabl_items(self):
        connection = self.connect()
        if connection:
            insert_query = "SELECT * FROM menu_items;"
        return insert_query
        

    def save_product(self):
        connection = self.connect()
    
        # Collect user inputs
        user_input_item_name = input("Enter item name: ")
        user_input_item_price = float(input("Enter item price: "))  # Assuming item price is a number
        
        cursor = connection.cursor()

        # Construct the insert query with user inputs directly
        insert_query = f"INSERT INTO menu_items (item_name, item_price) VALUES ('{user_input_item_name}', {user_input_item_price});"

        try:
            cursor.execute(insert_query)
            connection.commit()
            print("Your data added successfully!")
        except Exception as e:
            connection.rollback()  # Rollback in case of error
            print(f"Error inserting data: {str(e)}")
        finally:
            cursor.close()
            connection.close()
    
    def delete_product(self):
        connection = self.connect()
        if connection:
            try:
                cursor = connection.cursor()
                delete_query = "DELETE FROM menu_items WHERE item_name = %s;"
                cursor.execute(delete_query, (self.name,))
                #fix chancges to db
                connection.commit()
                print("This object remove is sucses")
            except Error as e:
                print(f"problem with connect to DB: {e}")
            finally:
                cursor.close()
                connection.close()

    def update_product(self, new_name=None, new_price=None):
        connection = self.connect()
        if connection:
            try:
                cursor = connection.cursor()
                if new_name:
                    update_query = "UPDATE menu_items SET item_name = %s WHERE item_name = %s;"
                    cursor.execute(update_query, (new_name, self.name))
                    self.name - new_name
                if new_price is not None:
                    update_query = "UPDATE menu_items SET item_price = %s WHERE item_price = %s;"
                    cursor.execute(update_query, (new_price, self.price))
                self.connection.commit
                print("the data was change")

            except Error as e:
                print("Error with connect to DB")
            
            finally:
                if cursor:
                    cursor.close()
    def select_all(menu_items: str, cursor) -> list[tuple]:
        query = f"select * from {menu_items};"
        cursor.execute(query)
        rows = (cursor.fetchall())  # if the query returns something (like select) - fetch all of the rows returned
        return rows
                    
if __name__ == "__main__":
    show_table = MenuItem
    show_table.select_all
    # insert_data = MenuItem
    # insert_data.save_product
