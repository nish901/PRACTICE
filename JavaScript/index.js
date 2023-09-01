let numTest = 45.324568;
console.log(numTest);

let twoDecimalPoints = numTest.toFixed(2);
// the toFixed converts the variable to a string, and the (2) define number of decimal spaces
console.log(twoDecimalPoints);

let stringTest = `I am the very model of a modern major general`;
let indexOfM = stringTest.indexOf(`m`);
// assign the index0fM variable to the index of m wihtin the variable 
console.log(indexOfM);


stringTest = stringTest.toUpperCase();
indexOfM = stringTest.indexOf(`M`);

let start = stringTest.indexOf("MODEL");
let end = stringTest.lastIndexOf('MAJOR');

console.log(start, end)

let subStr = stringTest.substring(start, end);
console.log(subStr);


document.write("<p>" + subStr + "</p>");
// using the + to concatinate strings together and put into html doc