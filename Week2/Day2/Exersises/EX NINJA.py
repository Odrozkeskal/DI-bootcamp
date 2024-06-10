import math

C = 50
H = 30

list_d  = []
list_q = []


for i in range(3):
        D = varible_input = int(input("Enter the numbers for D variable: "))
        list_d.append(D)
        Q = math.sqrt((2 * C * D) / H)
        list_q.append(int(Q))
print(list_q)