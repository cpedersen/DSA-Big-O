// What is the Big O of the following algorithm?
// Explain your answer

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const numToTest = 4;
console.log("numToTest: ", numToTest);
console.log("Execute function: ", isEven(numToTest));

// Solution:
// Constant time or 0(1).
// We are just checking for true or false. Size of
// the input doesn't vary the amount of time it takes
// for the function to complete.
