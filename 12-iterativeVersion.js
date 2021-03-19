// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// 1
function sheep(num) {
  for (let i = 0; i < num; i++) {
    console.log(`${num - i}: Another sheep jump over the fence`);
  }
  console.log(`All sheep jumped over the fence`);
}

console.log("Executing challenge #1: count sheep");
sheep(3);

// 2
function powerCalc(base, expo) {
  let total = 1;
  for (let i = 0; i < expo; i++) {
    total *= base;
  }
  console.log(total);
}

console.log("Executing challenge #2: power calc");
powerCalc(10, 2);

// 3
function reverseString(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output = str[i] + output;
  }
  console.log(output);
}

console.log("Executing challenge #3: reverse string");
reverseString("hello");

// 4
function nthTriangle(num) {
  let output = 0;
  for (let i = 0; i < num; i++) {
    output += num - i;
  }
  console.log(output);
}

console.log("Executing challenge #4: nth triangle");
nthTriangle(3);

// 5
function splitter(str, separator) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== separator) {
      output += str[i];
    }
  }
  console.log(output);
}

console.log("Executing challenge #5: string splitter");
splitter("02/20/2020", "/");

// 6
function fib(num) {
  let output = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      output.push(0);
    } else if (i === 1) {
      output.push(1);
    } else {
      output.push(output[i - 1] + output[i - 2]);
    }
  }
  return output;
}

console.log("Executing challenge #6: Fibonacci");
fib(5);

// 7

function factorial(num) {
  let output = 1;
  for (let i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
}

console.log("Executing challenge #7: Factorial");
factorial(5);
