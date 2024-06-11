sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

sales_volume = {}
spended_money = {}

for e in sales_data:
    # print(e)
    customers_id = e["customer_id"]
    product = e["product"]
    # print(product)
    price = e["price"]
    quantity = e["quantity"]
    income = price * quantity
    e["total_price"] = income
    # sales_data["total_price"] [0:-1] = income
    if product in sales_volume:
        sales_volume[product] += income
    else:
        sales_volume[product] = income
    if customers_id in sales_volume:
        spended_money[customers_id] += income
    else:
        spended_money[customers_id] = income
        
print(sales_data)
print(f"Sales volume {sales_volume}")
print(f"How much customers spended:{spended_money}")



    
