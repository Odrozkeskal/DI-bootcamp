items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
# print(items_purchase.items())

items_purchase2 = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}
items_purchase3 = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}
wallet = "$30"


def afforable_goods_calculator(items_purchase, wallet):
    wallet_amount = int(wallet.replace('$', '').replace(',', '')) # creating variable for comparing wallet amount with price, also removing $ symbol and coma's
    afforable_list = []
    
    for i, e in items_purchase.items():
        # print(i,e)
        price = int(e.replace('$', '').replace(',', '')) # transforming key's value as a prise variable
        
        if price <= wallet_amount:
            afforable_list.append(i)
            
    afforable_list.sort() # alphabetical order sorting
    return afforable_list \
         if afforable_list else "Nothing"

print(afforable_goods_calculator(items_purchase3, wallet))