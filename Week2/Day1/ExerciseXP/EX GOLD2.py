userInputMonth = input("Enter the number of month ")
month = int(userInputMonth)

if month in range(3,6):
   print("spring")
elif month in range(6,9):
   print("summer")
elif month in range(9,12):
   print("autumn")
elif month in range(13,0,-1):
   print("winter")
elif month == 0:
   print("Incorrect value")
