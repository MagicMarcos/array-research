/////description////
    // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

////how it works////
//     The unshift method inserts the given values to the beginning of an array-like object.

// unshift is intentionally generic. This method can be called or applied to objects resembling arrays. Objects which do not contain a length property—reflecting the last in a series of consecutive, zero-based numerical properties—may not behave in any meaningful manner.

// Please note that, if multiple elements are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters. Hence, calling unshift with n arguments once, or calling it n times with 1 argument (with a loop, for example), don't yield the same results

////time complexity////
// Adding an element at the beginning of an array means the new element will have an index of 0. Which means that the index of every other element must be incremented by 1. So Array.unshift() has a Linear Time Complexity and is O(n).

////ex1////
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


////ex2////
let arr = [1, 2]

arr.unshift(0)               // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1)          // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3])        // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5])  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]

////ex3////
//note that, if multiple elements are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters. Hence, calling unshift with n arguments once, or calling it n times with 1 argument (with a loop, for example), don't yield the same results.
let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]