country = "Iceland"
def describe_city(*,city:str, country:str):
    message = (f"The {city} is in {country}")
    return message

# Since that exercise I will use *, to not forget which parameter I should use
print(describe_city(city="Reykjavik", country=country))