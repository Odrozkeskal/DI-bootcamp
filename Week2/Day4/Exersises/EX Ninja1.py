def get_full_name(**kwargs):
    
    first_name = kwargs.get('first_name', '')
    middle_name = kwargs.get('middle_name', '')
    last_name = kwargs.get('last_name', '')
    # all_name_parts = [part.capitalize() for part in [first_name, middle_name, last_name] if part]
    all_name_parts = []
    for part in [first_name, middle_name, last_name]:
        if part:
            capitalized_part = part.capitalize()
            all_name_parts.append(capitalized_part)
            
    return ' '.join(all_name_parts)

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))
print(get_full_name(last_name="lee"))

