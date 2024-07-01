import requests
import psycopg2
from psycopg2 import Error
import random


def get_random_countries(num_countries=10):
    url = f"https://restcountries.com/v3.1/all"
    response = requests.get(url)
    countries_data = response.json()

    random_countries = random.sample(countries_data, num_countries)
    return random_countries


def save_countries_to_db(countries):
    conn = None

    try:
        conn = psycopg2.connect(dbname="countries_db", user="postgres", password="pkfnjujhmt2")
        cursor = conn.cursor()

        for country in countries:
            name = country.get("name").get("common")
            capital = country.get("capital")[0] if country.get("capital") else None
            flag = country.get("flags").get("png") if country.get("flags") else None
            subregion = country.get("subregion")
            population = country.get("population")

            cursor.execute("""
                INSERT INTO Countries (name, capital, flag, subregion, population) 
                VALUES (%s, %s, %s, %s, %s)
            """, (name, capital, flag, subregion, population))

        conn.commit()
        print(f"{len(countries)} countries saved successfully.")

    except Error as e:
        print("Error saving countries:", e)

    finally:
        if conn:
            cursor.close()
            conn.close()


if __name__ == "__main__":
    random_countries = get_random_countries()
    save_countries_to_db(random_countries)
