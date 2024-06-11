brand = {
    "name": "Zara",
"creation_date": 1975,
"creator_name": "Amancio Ortega Gaona",
"type_of_clothes": ["men", "women", "children", "home"],
"international_competitors": ["Gap", "H&M", "Benetton"],
"number_stores": 7000,
"major_color": {"France": "blue","Spain": "red","US": "pink, green"}
}

brand["number_stores"] -= 2

#print(brand.get("country_creation" , "Spain"))

brand["country_creation"] = "Spain"

for k in brand:
    if k == "international_competitors":

        brand["international_competitors"].append("Desigual")
        
brand["creation_date"] = " "

print(brand["international_competitors"][-1])
print(brand["major_color"] ["US"])
print(f"There is {(len(brand))} keys in brand dictionary")

for k in brand:
    print(k)

print("===================================")
more_on_zara = {"creation_date": 1975,
"number_stores": 10000}

brand.update(more_on_zara)
print(brand["number_stores"]) # The value of "number_stores" key  was substituted