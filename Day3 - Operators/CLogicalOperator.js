console.log('Welcome to JavaScript Operators');
console.log('There are different types of operators in JavaScript');

//for Arithmetic operator - please refer AArtihmeticOperators.js
console.log('1. Arithmetic Operators: It is used to perform Arithmetic Operation such as Sum, subtract, product, Modulus,Divide');
//for Assignment operator - please refer BAssignmentOperator.js
console.log('2. Assignment Operators : Assignment Operator is used to assign some value using different symbol =, +=, -=, *=, %=');
console.log('3. Logical Operators : Logical Operator is used to check the condition based different way And &&, OR ||, NOT!!');
console.log('AND && Logical Operator - it works when all  of the given conditions are true, then it returns true otherwise false')
var a = 56;
var b = 56;
var andLogicalOperatorTrue = a>45 && a>55; // Comparing two Conditions 
var andLogicalOperatorFalse = a>45 && a>56; // Comparing two Conditions 
var andLogicalOperatorTrue1 = a>45 && a>55 && a==56; // Comparing two or more Conditions 
var andLogicalOperatorFalse1 = a>45 && a>55 && a==57; // Comparing two or more Conditions 



console.log('The Result of Logical And Operator as follows',andLogicalOperatorTrue);  // Returns true as both Conditions are true 
console.log('The Result of Logical And Operator as follows',andLogicalOperatorFalse);  // Returns false as both Conditions arent true 
console.log('The Result of Logical And Operator as follows',andLogicalOperatorTrue1);  // Returns true as both Conditions are true 
console.log('The Result of Logical And Operator as follows',andLogicalOperatorFalse1);  // Returns false as both Conditions arent true 
//-----------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------OR || Logical Operator ------------------------------

console.log('OR || Logical Operator - it works when atleast one condition is true from all given conditions then it returns true otherwise false')
var a = 56;
var b = 56;
var orLogicalOperatorTrue = a>45 || a>55;   // Comparing two Conditions 
var orLogicalOperatorFalse = a<0 || a==100; // Comparing two Conditions 
var orLogicalOperatorTrue1 = a==45 || a==55 || a<60; // Comparing two or more Conditions 
var orLogicalOperatorFalse1= a==45 || a==55 || a>60; // Comparing two or more Conditions 

console.log('The Result of Logical OR Operator as follows',orLogicalOperatorTrue);  // Returns true as one Condition is true 
console.log('The Result of Logical OR Operator as follows',orLogicalOperatorFalse);  // Returns false as no Conditions arent true 
console.log('The Result of Logical OR Operator as follows',orLogicalOperatorTrue1);  // Returns true as both Conditions are true 
console.log('The Result of Logical OR Operator as follows',orLogicalOperatorFalse1);  // Returns false as no Conditions arent true 

//------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------Not || Logical Operator ------------------------------

console.log('NOT ! Logical Operator - It true become false and false become true')
var a = 56;
var b = 56;
var notLogicalOperatorTrue = !(a>60);  
var notLogicalOperatorFalse = !(a==56)
var notLogicalOperatorTrue1 = !(a==51) && !(a==51)
var notLogicalOperatorFalse1= !(a==56) && !(a==56)

console.log('The Result of Logical Not Operator as follows',notLogicalOperatorTrue);  // Returns true as one Condition is false
console.log('The Result of Logical Not Operator as follows',notLogicalOperatorFalse);  // Returns false as one Condition is true
console.log('The Result of Logical Not Operator as follows',notLogicalOperatorTrue1);  // Returns true as one Condition is false 
console.log('The Result of Logical Not Operator as follows',notLogicalOperatorFalse1);  // Returns false as one Condition is true























console.log('4. Bitwise Operators');
console.log('5. Ternary Operator');
console.log('6. Typeof Operator');
console.log('7. Unary Operators');
console.log('8. Relational Operators');
console.log('9. Equality Operators');
console.log('10. String Operators');
console.log('11. Conditional Operators');
console.log('12. Spread Operator');
console.log('13. Destructuring Operator');
console.log('14. Comma Operator');
console.log('15. Exponential Operator');
console.log('16. Increment and Decrement Operators');
console.log('17. Shift Operators (Left, Right, Unsigned Right)');
