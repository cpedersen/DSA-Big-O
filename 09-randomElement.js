// What is the Big O of the following algorithm? Explain your answer.

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Solution:
// Constant time complexity or 0(1).
// Random generation is always constant time
// complexity.
