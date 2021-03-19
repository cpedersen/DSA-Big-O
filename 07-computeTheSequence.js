// What does the following algorithm do?
// What is its runtime complexity?
// Explain your answer

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

const input = 8;
console.log("Input: ", input);
console.log("Solution: ", compute(input));

// Solution:
// Linear or 0(n).
// This is creating a Fibnocacci sequence of
// numbers.
// We are traversing/calculating an array. Time it
// takes is directional proportional to the size of the
// input.
