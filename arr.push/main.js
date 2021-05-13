/////description////
//The push method appends values to an array.

// push is intentionally generic. This method can be used with call() or apply() on objects resembling arrays. The push method relies on a length property to determine where to start inserting the given values. If the length property cannot be converted into a number, the index used is 0. This includes the possibility of length being nonexistent, in which case length will also be created.

// Although strings are native, Array-like objects, they are not suitable in applications of this method, as strings are immutable.  Similarly for the native, Array-like object arguments.

////how it works////
// adds one or more elements to the end of an array and returns the new length of the array.

////time complexity////

////ex1////
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4

////ex2////
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs)

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

////ex3////
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
