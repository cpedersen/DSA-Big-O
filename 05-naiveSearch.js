// What is the Big O of the following algorithm?
// Explain your answer

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// Solution:
// Linear or 0(n).
// We are traversing an array. Time it takes is
// directional proportional to the size of the
// input.
