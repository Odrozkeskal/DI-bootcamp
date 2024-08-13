function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var words = ['apple', 'banana', 'cherry'];
var wordsWithA = filterArray(words, function (word) { return word.includes('a'); });
console.log(wordsWithA);
