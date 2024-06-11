def affordable_items(items_purchase, wallet):
    # Convert the wallet amount from string to an integer
    wallet_amount = int(wallet.replace('$', '').replace(',', ''))
    
    # Initialize a list to store affordable items
    affordable = []
    
    # Iterate over items in the items_purchase dictionary
    for item, price_str in items_purchase.items():
        # Convert the price from string to an integer
        price = int(price_str.replace('$', '').replace(',', ''))
        
        # Check if the price of the item is less than or equal to the wallet amount
        if price <= wallet_amount:
            affordable.append(item)
    
    # Sort the list of affordable items in alphabetical order
    affordable.sort()
    
    # If there are no affordable items, return "Nothing", otherwise return the list of affordable items
    return affordable if affordable else "Nothing"


# Test cases
items_purchase1 = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet1 = "$300"
print(affordable_items(items_purchase1, wallet1))  # ➞ ["Bread", "Fertilizer", "Water"]

items_purchase2 = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet2 = "$100"
print(affordable_items(items_purchase2, wallet2))  # ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

items_purchase3 = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet3 = "$1"
print(affordable_items(items_purchase3, wallet3))  # ➞ "Nothing"
