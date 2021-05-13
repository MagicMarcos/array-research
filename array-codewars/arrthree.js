// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  var somme = 0;
  for (i = 0; i < x.length; i++) {
    somme += Number(x[i]);
  }
  return somme;
}
