users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

users_dictionary = {}
users_dictionary_inverted = {}
users_dictionary_alphabet = {}
value_of_key = -1
number_of_keys = -1
value_of_key_for_alphabetic_order = -1

users_alpabetic_list = list(users)
users_alpabetic_list.sort()

#print(users_alpabetic_list)

for e in users:
    value_of_key += 1
    users_dictionary[e] = value_of_key

print(users_dictionary)

for e in users:
    number_of_keys += 1
    users_dictionary_inverted[number_of_keys] = e
    
print(users_dictionary_inverted)

for e in users_alpabetic_list:
    value_of_key_for_alphabetic_order += 1
    users_dictionary_alphabet[e] = value_of_key_for_alphabetic_order
    
print(users_dictionary_alphabet)
##################################################################################
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
users_dictionary_with_i_letter = {}
value_of_key_with_i_letter = -1

for e in users:
   
    if "i" in e:
        value_of_key_with_i_letter += 1
        users_dictionary_with_i_letter[e] = value_of_key_with_i_letter
print(users_dictionary_with_i_letter)

#The characters, which names start with the letter “m” or “p”.

users_dictionary_with_mp = {}
value_of_key_with_mp = -1

for e in users:
    if e.startswith(("M", "P")):
        value_of_key_with_mp += 1
        users_dictionary_with_mp[e] = value_of_key_with_mp
    
print(users_dictionary_with_mp)