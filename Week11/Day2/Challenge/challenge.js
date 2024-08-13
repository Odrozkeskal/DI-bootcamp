function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    return allowedTypes.includes(valueType);
}
var num = 42;
var str = "Hello";
var bool = true;
var arr = [1, 2, 3];
console.log(validateUnionType(num, ["string", "number"]));
console.log(validateUnionType(str, ["string", "boolean"]));
console.log(validateUnionType(bool, ["string", "number"]));
console.log(validateUnionType(arr, ["object"]));
console.log(validateUnionType(arr, ["string", "number"]));
