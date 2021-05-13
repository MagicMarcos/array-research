/////description////
//creates a new array populated with the results of calling a provided function on every element in the calling array.
// map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).

// It is not called for missing elements of the array; that is:

// indexes that have never been set;
// indexes which have been deleted.

//how it works
//callbackFn
    // Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

// The callbackFn function accepts the following arguments:

    // element
        // The current element being processed in the array.
    // indexOptional
       // The index of the current element being processed in the array.
    // arrayOptional
        // The array map was called upon.
// thisArgOptional
    // Value to use as this when executing callbackFn.

////time complexity////
    // Linear Time Complexity O(n), all methods that loop through the enttire array tend to be linear time complexity rather than constant.
    
////ex1////
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

////ex2////
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

////ex3////
let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

//////ex4 /////
let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]