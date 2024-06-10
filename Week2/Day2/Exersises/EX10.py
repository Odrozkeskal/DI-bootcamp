sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(sandwich_orders)

finished_sandwiches = []

while len(sandwich_orders) > 0:
    for i in sandwich_orders:
        finished_sandwiches = sandwich_orders.pop()
        print(sandwich_orders)
        print(f"I made your {finished_sandwiches}")