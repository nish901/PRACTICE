// Aritmetic Operators

// 10
console.log(5 + 5);
// 50
console.log(5 * 10);
// 1
console.log(10 % 3);
// nan - oh it uses bodmas
console.log(5 + 10 / 2 * 5 - 10);
// 30
console.log((6 + 10) / 2 * 5 - 10);

// Assignment Operators
let x = 0

// 1
console.log(x = x + 1);
// 2, x is 1 before this next line so it will add 1 and equate x to the answer
console.log(x+= 1);
// 2 - becuase it print the current value of x - then applies the ++, you then have to print the x again to see the actually final number
console.log(x++);
console.log(x)
// 
console.log(++x);

// Relational Operators
// True
console.log(5 > 3);
// false
console.log(3 != 3);
// false
console.log(3 <= 2 && 5 >2);
// false 
console.log(!5>3);

// Mismatched Types
// 10 - not its 55 - the mismated converts it both to strings and concats them, it was * or / it would convert to numver
console.log(5 + "5");
// 6
console.log(5 + true);
// 25 
console.log(5 * "5");
// true
console.log(1 == true);
// false
console.log(1 === true);