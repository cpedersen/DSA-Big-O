// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer.

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

// Solution:
// Linear time or 0(n).

// We return false if number is less than 2,
// or if number is a decimal.
// We return true if number is prime, else false.

// We are traversing an array. Time it takes is
// directional proportional to the size of the
// input.
