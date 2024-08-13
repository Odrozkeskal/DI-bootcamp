function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    
    return allowedTypes.includes(valueType);
}

const num = 42;
const str = "Hello";
const bool = true;
const arr = [1, 2, 3];

console.log(validateUnionType(num, ["string", "number"])); 
console.log(validateUnionType(str, ["string", "boolean"])); 
console.log(validateUnionType(bool, ["string", "number"])); 
console.log(validateUnionType(arr, ["object"])); 
console.log(validateUnionType(arr, ["string", "number"])); 
