matrix_string = """7ii
Tsx
h%?
i #
sM
$a
#t%
^r!"""

matrix_list = matrix_string.split("\n")


row1 = []
row2 = []
row3 = []


for e in matrix_list:
    if len(e) >= 2:
        row1.append(e[0])
    if len(e) >= 1:
        row2.append(e[1])
    if len(e) >= 3:
        row3.append(e[2])

matrix = row1 + row2 + row3
matrix = str(matrix)
print(matrix)
for i in matrix:
    if i.isalpha() == True:
        print(i, end='')