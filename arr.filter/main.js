/////description////
    // creates a new array with all elements that pass the test implemented by the provided function.

////how it works////
    // a function is passed into the method containing the rule by which we want to filter out elements from an array
//     callbackFn
        // Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

        // It accepts three arguments:

        // element
            // The current element being processed in the array.
        // indexOptional
            // The index of the current element being processed in the array.
        // arrayOptional
            // The array filter was called upon.
        // thisArgOptional
            // Value to use as this when executing callbackFn.

////time complexity////
    // Linear Time Complexity O(n), all methods that loop through the enttire array tend to be linear time complexity rather than constant

////ex1////
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

////ex2////
    words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
    const deleteWords = words.filter( (word, index, arr) => {
    arr.pop()
    return word.length < 6
    })

    console.log(deleteWords)
    // Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
    // ["spray" ,"limit"]

////ex3////
    let words = [
      'spray',
      'limit',
      'exuberant',
      'destruction',
      'elite',
      'present',
    ];

    const modifiedWords = words.filter((word, index, arr) => {
      arr[index + 1] += ' extra';
      return word.length < 6;
    });