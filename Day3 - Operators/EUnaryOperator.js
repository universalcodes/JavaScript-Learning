/*
/* Points to Remember 
1. A Unary Operator operates on only ONE operand/value. 
2. Types of Increment / Decrement Unary Operators: 
1. Pre-Increment (++a)
2. Post-Increment (a++)
3. Pre-Decrement (--a) 
4. Post-Decrement (a--) 
3. Increment Operator (++) increases the value by 1. 
4. Decrement Operator (--) decreases the value by 1. 
5. In Pre-Increment / Pre-Decrement: First the value is changed, then the updated value is used. 
6. In Post-Increment / Post-Decrement: First the current value is used, then the value is changed. 
7. The position of ++ or -- is very important.
8.To Run JavaScript 
    Open the Terminal  
 These are following steps to run the program
    Ensure that please node has to be installed, following command has to used
    node -v
    Enter the following command to run  the program 
    for Example
     node "Day001- Assignments\AECart.js"   or
     node "F:\JavaScript Learning\Day001- Assignments\AECart.js"
     
*/

console.log("1. In Pre-Increment, the value is increased by 1 before the value is used.");
var a = 9;
console.log(++a);

console.log("2. In Post-Increment, the current value is used first, and then the value is increased by 1.");
var b = 9;
console.log(b++);
console.log(b);

console.log("3. In Pre-Decrement, the value is decreased by 1 before it is used.");
var c = 9; 
console.log(--c);

console.log("4. In Post-Decrement, the current value is used first, then it is decreased by 1.");
var d = 9; 
console.log(d--);

console.log("5. Complex Expressions");

var complexExA = 8;
var complexExAResult = c+7+ c++ + c++ +6 +c;

var complexExB = 18;
var complexExBResult = d+7+ d-- + d + d-- + d;  // 18+7+18+17+17+16

var complexExC = 18;
var complexExCResult = e + e + e-- + e + ++e +100 // 18+18+18+17+18+100

var complexExD = 18;
var complexExDResult = 1000 + 56+ 500 + f + f-- + ++f + f + 45 + f + ++f // 1000+56+500+18+18+18+18+45+18+19

var complexExE = 18;
var complexExEResult = 1000 + 56+ 500 + g + g++ + ++g +  g + g-- + --g + g +21 // 1000+56+500+18+18+20+20+20+18+18+21