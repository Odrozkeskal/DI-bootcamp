x = "4"
def sum (x):
    x_str = str(x)
    result = 0
    for i in range(1, 5):
        result_str = x_str * i
        result += int(result_str)
    return result
print(sum(x))
