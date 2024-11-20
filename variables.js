Q1: Declare a variable named age and assign it a value of 20. Print age to the console.
var age=20;
console.log("age =",age)


Q2:Declare three variables in a single line: firstName, lastName, and country. Assign values to these variables and display them.

var firstName = "vivek"; var lastName = "endla"; var country = "India";
console.log(firstName,lastName,country);


 Q3:Create two variables, itemPrice and itemQuantity, assign them numeric values. Print  their product as totalCost.

var itemPrice = 10;
var itemQuantity = 20;

console.log("totalcost=" + (itemPrice*itemQuantity) )

Q1:Create a variable name inside a function and try to access it outside the function. Explain why you get an error.

function data(){
    var a=10
    let b=20
    const c=30
    console.log(a);
    console.log(b);
    console.log(c);
}
// console.log(a);
// console.log(b); 
console.log(c);
data()

--> for var its showing error as(variables.js:29 Uncaught ReferenceError: a is not defined) because var is function scoped variable it will create in function and in function it self cannot be accesed outside the function
--> for let its showing error as(variables.js:30 Uncaught ReferenceError: b is not defined) and same error for const also because let and const are block scoped elements can be accesed outside the block

Q2:Declare a variable using var at the bottom of your code. Try to access it at the top of your  code and observe the result. Do the same with a let variable.

console.log(hi);
var hi=10;
let hi=20;
--> output is undefined
--> output is Uncaught ReferenceError: Cannot access 'hi' before initialization

Q3:Write code that creates a variable using var within a function. Then, call the function and try accessing the variable outside the function.

function data(){
    var A=10;
    // console.log(A);
  --> calling var inside the function will work because var is function scoped variable
}
data()
console.log(A)
--> calling var outside will not work it returns not defined

 Q1:Declare a variable using var at the top of your code and redeclare it using let with the  same name. Note any errors or messages in the console.

var A=10
let A=20

--> output(Uncaught SyntaxError: Identifier 'A' has already been declared )

Q2:Write code that uses a const variable in a function and then try to reassign it inside and  outside the function. Explain the results.

function data(){
    const A="john"
    const A="joe"
    console.log(A)
}
data()
const A="mark"
console.log(A)

--> if we reassgn inside the function it shows its already taken 
--> if we reassign outside the function it will be reassigned because the blocked elements cannot be declared in same scope

Q3:Explain, with examples, how JavaScript handles hoisting for function declarations, var,let, and const

{
    debugger
    var A=10;
    let B=20;
    const C=30;
}
 --> if we take inside the block var is hoisted to global scope its A is undefined and let and const are hoisted to block scope values are unavailable

debugger
var A=10;
let B=20;
const C=30;

--> here var A hoised to global scoped and value id undefined 
--> let B and const c id hoisted to script/TDZ(temporal dead zone) value id unavailable


 

 


 