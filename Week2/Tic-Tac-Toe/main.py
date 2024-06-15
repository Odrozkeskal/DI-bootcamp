picture = [
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]
]
# for i in picture:
#   for e in range(len(i)):
#     if i[e] != 0:
#       i[e] = "*"
#     else:
#       i[e] = " "
#   print(i)
#
#
import time

for i in picture:
  for e in i:
    if e == 1:
      print('', end='*', flush= False)
      time.sleep(0.15)
    elif e == 2:
      print('', end='*', flush= False)
      time.sleep(0.15)
    else:
      print(' ', end='')
  print("/")



import time

for i in range(5):
    print(i, end=" ", flush=False)  # Print numbers as soon as they are generated
    # print(i, end=" ", flush=False)  # Print everything together at the end
    time.sleep(0.5)

print("end")