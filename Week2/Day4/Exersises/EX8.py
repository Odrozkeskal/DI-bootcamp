data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def star_wars_quiz(data):
    correct_answers = 0
    incorrect_answers = 0
    
    for i in data:
        question = i["question"]
        answer = i["answer"]
        user_input_answer = input(question + " ")
        if user_input_answer.lower() == answer.lower():
            print("Right answer")
            correct_answers += 1
        else:
            print(question)
            print("Wrong answer. The right answer is: ", answer)
            incorrect_answers += 1
            
        if incorrect_answers > 3:
            print("Try to pass the quiz again")
    print(f"Correct answers:, {correct_answers}")
    print(f"Incorrect answers:, {incorrect_answers}")
    
    
    return correct_answers, incorrect_answers

   


print(star_wars_quiz(data))