// What is the Big O of the following algorithm?
// Explain your answer

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Constant time
// The input size doesn't impact the function return, because
// we are only checking for true or false.
