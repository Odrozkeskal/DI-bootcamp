number_input = input("Enter number: ")
length_input = input("Enter length: ")

result_list = []
result_list.append(int(number_input))
result_unit = int(number_input)

while len(result_list) != int(length_input):
    result_unit += int(number_input)
    result_list.append(result_unit)

print(result_list)

###################################################################################

#Alternative way

number = int(input("Enter number: "))
length = int(input("Enter length: "))
result_list = [number * (i + 1) for i in range(length)]
print(result_list)