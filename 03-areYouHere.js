// What is the Big O of the following algorithm?
// Explain your answer

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

const arr1 = [0, 0, 0, 1];
const arr2 = [0, 0, 1, 1];
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);
console.log("Execute function: ", areYouHere(arr1, arr2));

// Solution:
// Polynomial time or 0(n^k).
// We are using 2 nested loops (0^2). The longer the inputs,
// the more looping we need to do.
