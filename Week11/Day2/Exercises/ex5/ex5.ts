function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {
    return arr.filter(predicate);
}


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 

const words = ['apple', 'banana', 'cherry'];
const wordsWithA = filterArray(words, word => word.includes('a'));
console.log(wordsWithA); 
