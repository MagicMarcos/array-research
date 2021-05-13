/////description////
// The pop method removes the last element from an array and returns that value to the caller.

// pop is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

// If you call pop() on an empty array, it returns undefined.

// Array.prototype.shift() has similar behavior to pop, but applied to the first element in an array.


////how it works////
// method removes the last element from an array and returns that element. -- changes array length

////time complexity////

////ex1////
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon

////ex2////

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]



////ex3////

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]