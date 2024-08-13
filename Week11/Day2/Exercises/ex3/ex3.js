var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function combineObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// Пример использования
var obj1 = { name: 'Alice', age: 25 };
var obj2 = { job: 'Engineer', city: 'New York' };
var combined = combineObjects(obj1, obj2);
console.log(combined);
