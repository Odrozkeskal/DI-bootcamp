basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.reverse()
basket.pop()
basket.reverse()
print(basket)
basket.pop()
print(basket)
basket.append("kiwi")
print(basket)
basket.append("Apples")
basket[1],basket[3] = basket[3], basket[1]
apple_count = basket.count("Apples")

print(basket)
print(f"There is {apple_count} apples in basket")

basket.clear()

print(basket)