/////description////
    // method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

////how it works////
    //simply place the element you are looking for and the method takes care of the rest 
    // you may also determine an index from which it will start
    //A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

    // Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.

    // searchElement
        // The value to search for.

    // Note: When comparing strings and characters, includes() is case-sensitive.

    // fromIndex Optional
        // The position in this array at which to begin searching for searchElement.

        // The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).

        // Defaults to 0.

////time complexity////
    // Linear Time Complexity O(n), all methods that loop through the enttire array tend to be linear time complexity rather than constant

////ex1////
    // array length is 3
    // fromIndex is -100
    // computed index is 3 + (-100) = -97

    let arr = ['a', 'b', 'c']

    arr.includes('a', -100) // true
    arr.includes('b', -100) // true
    arr.includes('c', -100) // true
    arr.includes('a', -2)   // false

////ex2////
    let arr = ['a', 'b', 'c']

    arr.includes('c', 3)    // false
    arr.includes('c', 100)  // false

////ex3////
    [1, 2, 3].includes(2)      // true
    [1, 2, 3].includes(4)      // false
    [1, 2, 3].includes(3, 3)   // false
    [1, 2, 3].includes(3, -1)  // true
    [1, 2, NaN].includes(NaN)  // true