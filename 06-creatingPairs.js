// What is the Big O of the following algorithm?
// Explain your answer

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

// Solution:
// Polynomial time or 0(n^k).
// We are using 2 nested loops. The longer the inputs,
// the more looping we need to do.
