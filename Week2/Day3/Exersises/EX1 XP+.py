student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}
average_score = 0
average_score_all = 0

student_averages = {}

for i, e in student_grades.items():
    # print(type(e[0]))
     average_score = (sum(e)) // (len(e))
     student_averages[i] = average_score
    
print(student_averages)

student_letter_grades = {}

for i, e in student_averages.items():
    if e >= 90:
        student_letter_grades[i] = "A"
    elif e >= 80 and e <= 89:
        student_letter_grades[i] = "B"
    elif e >= 70 and e <= 79:
        student_letter_grades[i] = "C"
    elif e >= 60 and e <= 69:
        student_letter_grades[i] = "D"
    elif e < 60:
        student_letter_grades[i] = "F"
        
print(student_letter_grades)

for i, e in student_averages.items():
   
     average_score_all = sum(student_averages.values()) // len(student_averages)

print(f"Average score of all studends is: {average_score_all}")
final_dictionary = {}
score_list = []
# final_dictionary = student_letter_grades | student_averages


for e in student_averages:
    
    average_score = student_averages[e]
    letter_grade = student_letter_grades[e]
    final_dictionary[e] = [average_score, letter_grade]

print(final_dictionary)
     
