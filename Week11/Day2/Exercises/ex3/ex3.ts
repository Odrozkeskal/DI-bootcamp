function combineObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Пример использования
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { job: 'Engineer', city: 'New York' };

const combined = combineObjects(obj1, obj2);
console.log(combined); 
