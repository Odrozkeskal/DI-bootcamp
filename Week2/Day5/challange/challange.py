user_input = input("Enter few words separated by coma: ")

user_input_list = list(user_input.split(","))
user_input_sorted_list = sorted(user_input_list)
user_sorted_input_string = ",".join(user_input_sorted_list)

print(user_sorted_input_string)
###########################################################################
#Ch 2
def longest_word(sentence):
    words = sentence.split(" ")
    longest = ""
    max_length = 0
    for i in words:
        length = len(i)
        
        if length > max_length:
            longest = i
            max_length = length
        
        return longest
    
sentence = "Margaret's toy is a pretty doll."

print(longest_word(sentence))