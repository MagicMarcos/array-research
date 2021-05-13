/////description////
    //checks if every element in an array passes a certain test function

////how it works////
    // a function is defined within the .every() method, this function will check all elements and return a Boolean based on whether all elements pass or fail
    //callbackFn
        // A function to test for each element, taking three arguments:
        //element
            // The current element being processed in the array.
        // index Optional
            // The index of the current element being processed in the array.
        // array Optional   
            // The array every was called upon.
    // thisArg Optional
        // A value to use as this when executing callbackFn.

////time complexity////
    // Linear Time Complexity O(n), all methods that loop through the enttire array tend to be linear time complexity rather than constant

////ex1////
    const isBelowThreshold = (currentValue) => currentValue < 40;

    const array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // expected output: true

////ex2////
   arr = [1, 2, 3];
   arr.every( (elem, index, arr) => {
   arr.push('new')
   console.log(`[${arr}][${index}] -> ${elem}`)
   return elem < 4
   })

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

////ex3//// 
    arr = [1, 2, 3, 4];
    arr.every( (elem, index, arr) => {
    arr.pop()
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 4
    })

    // Loop runs for 2 iterations only, as the remaining
    // items are `pop()`ed off
    //
    // 1st iteration: [1,2,3][0] -> 1
    // 2nd iteration: [1,2][1] -> 2

////ex4////
    let arr = [1, 2, 3, 4];
    arr.every((elem, index, arr) => {
      arr[index + 1] -= 1;
      console.log(`[${arr}][${index}] -> ${elem}`);
      return elem < 2;
    });