import math

list_one = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
# list_two = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2]
# list_tree = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76]
# list_four = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

list_one.sort(reverse=True)
list_sum = sum(list_one)

print(list_one)
print(f"Sum of the emenets: {list_sum}")
print(f"The first index of list: {list_one[0]}")
print(f"The second index of list: {list_one[-1]}")
print("==============================")
for i in list_one:
    if i > 50:
        print(f"{i} is more than 50")
    elif i < 10:
        print(f"{i} is less than 10")
print("=======================")
for i in list_one:
    square = math.pow(i, 2)
    print(square)


print("=========================")

list_one_tuple = tuple(list_one)
print(f"List without dublicates: {list_one_tuple}")
print(f"There is {(len(list_one))} elements in list")

list_average = (sum(list_one)) // (len(list_one))

print(f"Avarage value of elements: {list_average}")

print(f"The greatest velue: {(max(list_one))} ")

print(f"The smallest velue: {(min(list_one))} ")