text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3"

words = text.split()

counter = {}

for i in words:
    if i in counter:
        counter[i] += 1
    else:
        counter[i] = 1

print(counter)