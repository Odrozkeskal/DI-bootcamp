user_input = input("Enter any word: ")

dictionary = {}

for i, e in enumerate(user_input):
    if e not in dictionary:
        dictionary[e] = [i]
    else:
        dictionary[e].append(i)
        
    
print(dictionary)