morse_code = {
    "A":"*-",
    "B":"-***",
    "C":"-*-*",
    "D":"-**",
    "E":"*",
    "F":"**-*",
    "G":"--*",
    "H":"****",
    "I":"**",
    "J":"*---",
    "K":"-*-",
    "L":"*-**",
    "M":"--",
    "N":"-*",
    "O":"---",
    "P":"*--*",
    "Q":"--*-",
    "R":"*-*",
    "S":"***",
    "T":"-",
    "U":"**-",
    "V":"**-",
    "W":"*--",
    "X":"-**-",
    "Y":"-*--",
    "Z":"--**"
}

morse_code_reversed_ver = {
    "*-":"A",
    "-***":"B",
    "-*-*":"C",
    "-**":"D",
    "*":"E",
    "**-*":"F",
    "--*":"G",
    "****":"H",
    "**":"I",
    "*---":"J",
    "-*-":"K",
    "*-**":"L",
    "--":"M",
    "-*":"N",
    "---":"O",
    "*--*":"P",
    "--*-":"Q",
    "*-*":"R",
    "***":"S",
    "-":"T",
    "**-":"U",
    "**-":"V",
    "*--":"W",
    "-**-":"X",
    "-*--":"Y",
    "--**":"Z"
}
user_input = input("Enter any sentence: ")
uppercassed_text = user_input.upper()

sentence_list = list(uppercassed_text)
sentence_list_dictionary = {}
keys = range(len(sentence_list))
morse_result = []
morse_result_string = ""
def morse_coder(uppercassed_text):
    global morse_result
    global keys
    global sentence_list_dictionary
    for key, value in zip(keys, sentence_list):
        sentence_list_dictionary[key] = value
        # print(value)
        for k in morse_code:
         if k == value:
            value = morse_code[k]
            # print(sentence_list_dictionary[key])
            morse_result.append(value)
        if  value == " ":
            value = "/"
            morse_result.append(value)
# print(morse_result)
    global morse_result_string
    for i in morse_result:
        morse_result_string = " ".join(morse_result)
    return morse_result_string

code_message = morse_coder(uppercassed_text)

print(code_message)

code_list = list(code_message.split(" "))
code_list_dictionary = {}
keys_reversed = range(len(code_list))
letters_result = []
letters_result_string = ""

def morse_decoder(code_message):
    global code_list
    global letters_result
    global code_list_dictionary
    global keys_reversed
    global letters_result_string
    for key, value in zip(keys_reversed,code_list):
        code_list_dictionary[key] = value
     
        for k in morse_code_reversed_ver:
            # print(k)
            if k == value:
                value = morse_code_reversed_ver[k]
                letters_result.append(value)
            if value == "/":
                value = ""
                letters_result.append(value)
        
    for i in letters_result:
                letters_result_string = " ".join(letters_result)
    return letters_result_string

decoded_message = morse_decoder(code_message)

print(decoded_message)