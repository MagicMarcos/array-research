// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    console.log(numbers.reduce((a, b) => a + b));



// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
    const ages = [10, 2, 3, 14, 23, 45, 64, 33, 8, 80]
    ages.sort((a, b) => a - b);
    const oldest = ages[ages.length-1]
    const youngest = ages[0]
    let ageDiff = []
    ageDiff.push(youngest, oldest, oldest-youngest )
    console.log(ageDiff)



// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

    let numArr = [8,10,20,30,50]
    numArr.sort((a,b) => a-b)
    numArr.pop()
    numArr.shift()
    console.log(numArr.reduce((a,c) => a + c))

