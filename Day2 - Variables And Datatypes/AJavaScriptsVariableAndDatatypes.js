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
---- typeof used here -- 

document.write("The Value of boolean Variable as follows ", typeof(booleanVariable));
console.log("Printing the value of boolean Variable within the browser console as follows", typeof(booleanVariable));

*/



var onlyIntialization;  // we are only initialization the value
document.write("The Value of only Intialized as follows ", onlyIntialization);  // as no value is initialized then we got output as undefined
console.log("Printing the value of only Intialized within the browser console as follows", onlyIntialization);  // as no value is initialized then we got output as undefined

onlyIntialization = 89; // we have assigned new value to onlyIntialization = 89; this is called as declaration 
document.write("The Value of only Intialization as follows ", onlyIntialization);  // as no value is initialized then we got output as undefined
console.log("Printing the value of only Intialization within the browser console as follows", onlyIntialization);  // as no value is initialized then we got output as undefined


var intVariable = 45; // this is better way where we have done Intialized & declaration
document.write("The Value of Variable as follows ", intVariable);
console.log("Printing the value of int variable within the browser console as follows", intVariable);

var strVariable = "Yogesh";
document.write("The Value of String Variable as follows ", strVariable);
console.log("Printing the value of String Variable within the browser console as follows", strVariable);

var charVariable = 'c';
document.write("The Value of Char Variable as follows ", charVariable);
console.log("Printing the value of Char Variable within the browser console as follows", charVariable);

var booleanVariable = true;
document.write("The Value of boolean Variable as follows ", booleanVariable);
console.log("Printing the value of boolean Variable within the browser console as follows", booleanVariable);

// Reassigning the value to existing variable 
booleanVariable = false;
document.write("The Value of boolean Variable as follows ", booleanVariable);
console.log("Printing the value of boolean Variable within the browser console as follows", booleanVariable);

// ---- typeof used here -- 

document.write("The Type of Data type as follows ", typeof(booleanVariable));
console.log("Printing The Type of Data type within the browser console as follows", typeof(booleanVariable));
