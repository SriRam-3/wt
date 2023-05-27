var calculator = require('./calc');

var a = 21 
var b = 67

console.log("Addition of " + a + " and " + b + " is " + calculator.add(a, b));

console.log("Subtraction of " + a + " and " + b + " is " + calculator.sub(a, b));

console.log("Multiplication of " + a + " and " + b + " is " + calculator.mul(a, b));

console.log("Division of " + a + " and " + b + " is " + calculator.div(a, b));