import json


sampleJson = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)
print(type(data))

salary = data['company']['employee']['payable']['salary']
print("Salary:", salary)


data['company']['employee']['birth_date'] = "1987-07-04"

print(data)

modifiedJson = json.dumps(data, indent=2)

print("Modified JSON:")
print(modifiedJson)
