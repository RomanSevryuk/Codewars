// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
let numA = Number(a);
let numB = Number(b);

    return String(numA + numB)
}

console.log(sumStr("2", "3"))