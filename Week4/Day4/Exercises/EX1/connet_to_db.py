import psycopg2
from psycopg2 import Error

class CoonectDB:

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
            print("connest sucsecfully")
            return connection
        except Error as e:
            print(f"error for connect: {e}")   
            return None
