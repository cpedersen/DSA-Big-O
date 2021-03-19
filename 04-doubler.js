// What is the Big O of the following algorithm?
// Explain your answer

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Solution:
// Linear or 0(n).
// We are traversing an array. Time it takes is
// directional proportional to the size of the
// input.
