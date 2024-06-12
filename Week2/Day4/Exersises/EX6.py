magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_names):
    output = (magician_names)
    return output
print(show_magicians(magician_names))

def make_great(magician_names):
    great_magicians = []
    for i in magician_names:
        great_magicians.append(f"The Great {i}")
    return great_magicians
print(make_great(magician_names))