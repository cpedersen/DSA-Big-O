// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?

// Simpler way to explain it:
// Puzzle with 3 pegs and multiple disks of different sizes.
// Goal of the puzzle is to move all the desks from the source peg to
// the destination peg according to the following rules:
// - Only one disk can be moved at a time
// - You can only move the top disk in a stack
// - No disk may be placed on top of a smaller disk

function Tower(num, source, destination, via) {
  if (num <= 0) {
    // Base case
    return;
  } else {
    // Recursive case
    const newNum = num - 1;
    Tower(newNum, source, destination, via);
    console.log(
      `Move disk ${newNum} from Rod ${source} to Rod ${destination} via Rod ${via}`
    );
    Tower(newNum, via, source, destination);
  }
}

// Puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape)

// This takes 7 moves:
// Tower(3, "A", "B", "C");

// This takes 15 moves:
// Tower(4, "A", "B", "C");

// THis takes 31 moves:
Tower(5, "A", "B", "C");

// If you are given 5 disks, what do the rods look like after 7 recursive calls?
// Move disk 0 from Rod A to Rod B via Rod C
// Move disk 1 from Rod A to Rod B via Rod C
// Move disk 0 from Rod C to Rod A via Rod B
// Move disk 2 from Rod A to Rod B via Rod C
// Move disk 0 from Rod C to Rod A via Rod B
// Move disk 1 from Rod C to Rod A via Rod B
// Move disk 0 from Rod B to Rod C via Rod A

// Rod A:
// disk 1
// disk 3
// disk 4

// Rod B:
// disk 2

// Rod C:
// disk 0

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks? See above.
// What is the runtime complexity of your algorithm? Exponential time or 0(2^n).
