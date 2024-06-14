matrix_string =     """
    7ii
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
matrix = []

for e in matrix_list:
    d = e[::4] # 1st column
    row1.append(d)
    r= e[::5] # 2nd column
    row2.append(r)
    h = e[::3] # 3rd column
    row3.append(h)
    
matrix = row1 + row2 + row3
matrix = str(matrix)
for i in matrix:
    if i.isalpha() == True:
        print(i, end='')
  
        







    


