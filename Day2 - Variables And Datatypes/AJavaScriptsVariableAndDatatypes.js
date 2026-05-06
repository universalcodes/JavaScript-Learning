/*
points to remember 
in Javascript Variables are used to store some value/data for further processing
there are different type of datatypes in JavaScript 
primitive datatypes - numbers, boolean, null, undefined, finally String 
though String is non primitive data type in java
In Java script it is primitive
non-primitive datatypes - Object, Array, Function, Date, Regex

To know the typeof Datatype then we use inbuilt method as typeof

for example
var booleanVariable = true;
document.write("The Value of boolean Variable as follows ", booleanVariable);
console.log("Printing the value of boolean Variable within the browser console as follows", booleanVariable);

------------------------------------- typeof used here --------------------------- 

document.write("The Value of boolean Variable as follows ", typeof(booleanVariable));
console.log("Printing the value of boolean Variable within the browser console as follows", typeof(booleanVariable));
 
---------------- const----------------------------------------------
const is the Variable where once we assign the value we cant change it
const fixedValue = 89;
console.log('The value of const fixedValue as follows', fixedValue);
fixedValue = 90; // we have tried to re-assign value to fixedValue as 90
console.log('The updated value of const fixedValue as follows', fixedValue);  // it throw error as TypeError: Assignment to constant variable.at Object.<anonymous> (F:\JavaScript Learning\Day2 - Variables And Datatypes\AJavaScriptsVariableAndDatatypes.js:65:12)
--------------------------------------------------------------------------------------------------------


--------------------------------------let --------------------------------------
1. let Variable cant be reclared
let relcarelet = 10;
let relcarelet = 20; // ❌ Error: Identifier 'relcarelet' has already been declared
console.log(relcarelet);  // The output is SyntaxError: Identifier 'relcarelet' has already been declared

but ✅ Allowed (it is allowed in block scope)
let c = 10;
{
  let c = 20; // ✅ Allowed (it is allowed in block scope)
  console.log(c); // Output: 20
}
console.log(c); // Output: 10


2. let is Variable which cant be accessed outside the function block
for example --- Valid Let is defined inside the function
function testLet() {
  if (true) {
    let y = 20;
      console.log(y); // ❌ No Error: y is defined inside the function
  }
}

2. Invalid Example  // here y is defined outside the function
function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ Error: y is not defined
}
------------------------------------------------------------var -----------------------------------
1. var Variable can be reclared
var redeclarevar = 10;
var redeclarevar = 20; // 
console.log('the value of var redeclarevar as fellows',redeclarevar);  // No Error

//1. Valid Example  // here y1 is defined inside the function

function testVarInside() {
  if (true) {
    var y1 = 20;
      console.log('here var variable called inside the variable', y1); // ❌ No Error: y1 is defined inside the function
  }
}

//2. Valid Example  // here y1 is defined outside the function
function testVarOutside() {
  if (true) {
    var y1 = 20;
  }
      console.log('here var variable called outside the variable', y1); // ❌ No Error: even y1 is defined outside the function
}

testVarInside(); testVarOutside();


// 📊 Summary Table
// Feature	        var	                                let	                                const
// Scope	        Function-scoped	                    Block-scoped	                    Block-scoped
// Hoisting	    Hoisted + undefined	                Hoisted but TDZ → ReferenceError	Hoisted but TDZ → ReferenceError
// Redeclaration	Allowed	                            Not allowed	                        Not allowed
// Reassignment	Allowed	                            Allowed	                            ❌ Not allowed
// Default Value	undefined	                        undefined	                        Must be initialized

*/



var onlyIntialization;  // we are only initialization the value
// document.write("The Value of only Intialized as follows ", onlyIntialization);  // as no value is initialized then we got output as undefined
console.log("Printing the value of only Intialized within the browser console as follows", onlyIntialization);  // as no value is initialized then we got output as undefined

onlyIntialization = 89; // we have assigned new value to onlyIntialization = 89; this is called as declaration 
// document.write("The Value of only Intialization as follows ", onlyIntialization);  // as no value is initialized then we got output as undefined
console.log("Printing the value of only Intialization within the browser console as follows", onlyIntialization);  // as no value is initialized then we got output as undefined


var intVariable = 45; // this is better way where we have done Intialized & declaration
// document.write("The Value of Variable as follows ", intVariable);
console.log("Printing the value of int variable within the browser console as follows", intVariable);

var strVariable = "Yogesh";
// document.write("The Value of String Variable as follows ", strVariable);
console.log("Printing the value of String Variable within the browser console as follows", strVariable);

var charVariable = 'c';
// document.write("The Value of Char Variable as follows ", charVariable);
console.log("Printing the value of Char Variable within the browser console as follows", charVariable);

var booleanVariable = true;
// document.write("The Value of boolean Variable as follows ", booleanVariable);
console.log("Printing the value of boolean Variable within the browser console as follows", booleanVariable);

// Reassigning the value to existing variable 
booleanVariable = false;
// document.write("The Value of boolean Variable as follows ", booleanVariable);
console.log("Printing the value of boolean Variable within the browser console as follows", booleanVariable);

// ---- typeof used here -- 

// document.write("The Type of Data type as follows ", typeof(booleanVariable));
console.log("Printing The Type of Data type within the browser console as follows", typeof(booleanVariable));

const fixedValue = 89;
console.log('The value of const fixedValue as follows', fixedValue);
// fixedValue = 90; // we have tried to re-assign value to fixedValue as 90
// console.log('The updated value of const fixedValue as follows', fixedValue);  // it throw error as TypeError: Assignment to constant variable.at Object.<anonymous> (F:\JavaScript Learning\Day2 - Variables And Datatypes\AJavaScriptsVariableAndDatatypes.js:65:12)

// console.log('The value of let noValueVariable as follows', noValueVariable);





//------------------------------------------------------- let ---------------------------------------------

let noValueVariable;
console.log('The value of let noValueVariable as follows', noValueVariable);


// let relcarelet = 10;
// let redelcarelet = 20; // ❌ Error: Identifier 'b' has already been declared
// console.log(relcarelet);  // The output is SyntaxError: Identifier 'relcarelet' has already been declared



console.log("redelcare let within the block")
let c = 10;
{
  let c = 20; // ✅ Allowed (it is allowed in block scope)
  console.log(c); // Output: 20
}
console.log(c); // Output: 10

console.log('function test'); // Output: 10

function testLetInside() {
  if (true) {
    let y = 20;
      console.log('here let variable called inside the variable', y); // ❌ No Error: y is defined inside the function
  }
}

//2. Invalid Example  // here y is defined outside the function
// function testLetOutside() {
//   if (true) {
//     let y = 20;
//   }
//   console.log(y); // ❌ Error: y is not defined
// }



//Calling Methods
testLetInside();
//testLetOutside();

//------------------------------------------------------- var ---------------------------------------------

//1. Valid Example  // here y1 is defined inside the function

function testVarInside() {
  if (true) {
    var y1 = 20;
      console.log('here var variable called inside the variable', y1); // ❌ No Error: y1 is defined inside the function
  }
}

//2. Valid Example  // here y1 is defined outside the function
function testVarOutside() {
  if (true) {
    var y1 = 20;
  }
      console.log('here var variable called outside the variable', y1); // ❌ No Error: even y1 is defined outside the function
}

testVarInside(); testVarOutside();

console.log('redeclare var example')
var redeclarevar = 10;
var redeclarevar = 20; // it is allowed in Var
console.log('the value of var redeclarevar as fellows',redeclarevar);  // No Error

