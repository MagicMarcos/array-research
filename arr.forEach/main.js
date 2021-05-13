/////description////
    // forEach() calls a provided callbackFn function once for each element in an array in ascending index order. It is not invoked for index properties that have been deleted or are uninitialized.

//     callbackFn is invoked with three arguments:

//         the value of the element
//         the index of the element
//         the Array object being traversed

    //does not mutate the array on which it is called. (However, callbackFn may do so)

////how it works////
     //method that loops through each element in an array and executes the provided function 

////time complexity////
    // Linear Time Complexity O(n), all methods that loop through the enttire array tend to be linear time complexity rather than constant

////ex1////
    let words = ['one', 'two', 'three', 'four']
    words.forEach(function(word) {
    console.log(word)
    if (word === 'two') {
        words.shift() //'one' will delete from array
    }
    }) // one // two // four

    console.log(words);  //['two', 'three', 'four']

////ex2////
    function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj))
    const propNames = Object.getOwnPropertyNames(obj)

    propNames.forEach(function(name) {
        const desc = Object.getOwnPropertyDescriptor(obj, name)
        Object.defineProperty(copy, name, desc)
    })

    return copy
    }

    const obj1 = { a: 1, b: 2 }
    const obj2 = copy(obj1) // obj2 looks like obj1 now

////ex3////
    const items = ['item1', 'item2', 'item3'];
    const copyItems = [];

    // before
    for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
    }

    // after
    items.forEach(function (item) {
    copyItems.push(item);
    });