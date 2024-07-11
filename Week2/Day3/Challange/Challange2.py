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
wallet = "$100"


def afforable_goods_calculator(items_purchase, wallet):
    wallet_amount = int(wallet.replace('$', '')) 
    afforable_list = []
    current_transaction_sum = 0
    
    for i, e in items_purchase.items():
        # print(i,e)
        price = int(e.replace('$',''))
        current_transaction_sum += price
        
        if current_transaction_sum + price <= wallet_amount:
            afforable_list.append(i)
            current_transaction_sum += price
            
        else:
            if afforable_list:
              max_price_item = max(afforable_list, key=lambda x: int(items_purchase[x].replace('$', '')))
            if price < int(items_purchase[max_price_item].replace('$', '')):
                    current_transaction_sum -= int(items_purchase[max_price_item].replace('$', ''))
                    afforable_list.append(i)
                    current_transaction_sum += price
        
            
    afforable_list.sort() # alphabetical order sorting
    return afforable_list \
         if afforable_list else "Nothing"

print(afforable_goods_calculator(items_purchase2, wallet))