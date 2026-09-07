/*
==       → loose equality
===      → strict equality

+        → string concatenation

? :      → conditional / ternary

...      → spread / unpack

[] / {}  → destructuring

,        → comma operator

**       → exponent / power

++       → increment
--       → decrement

<<       → left shift
>>       → right shift
>>>      → unsigned right shift
*/
console.log('9. Equality Operators');

let a = 10;
let b = "10";
let c = 45
let d = 45.0;

console.log(a==b) // here we have compared the values of both Variables, values are same , it returns true
console.log(b==a) // here we have compared the values of both Variables, values are same , it returns true

console.log(c==b) // here we have compared the values of both Variables values arenot same , it returns false
console.log(b==c) // here we have compared the values of both Variables values arenot same, it returns false

console.log("int vs float")
console.log(d) 
console.log(c==d) //


console.log('10. String Operators');

let firstName = "Yogesh";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;

console.log(fullName);
// Yogesh Kumar

let message = "Hello " + "Yogesh";
console.log(message);
// Hello Yogesh

let compactName = "Java User";
compactName += compactName;
// compactName = compactName +compactName

console.log(compactName);

console.log('12. Spread Operator');
let arrTest = [56, 45,78];
console.log('Array Result as follows\t'+ typeof arrTest)
console.log('Array Result as follows 2'+ typeof arrTest)
console.log("Array Result as follows 3"+ typeof arrTest)

console.log(typeof arrTest);


let arr1 = [10, 20, 30];
console.log(arr1);
let arr2 = [arr1, 40, 50];

console.log(arr2);
// [10, 20, 30, 40, 50]


console.log('Full Stack QA Example');
// basic snytax of Array 
//let variable = [values]
let manualQA = ["Functonal Testing", "Regressoion Testing","Integration Testing"];
let automationQA = ["Java", "Selenium"];
let apiManual = ["Basics", "Postman"];
let apiAutomation = [ "RestAssured"];
let fullStackQA = [manualQA, automationQA, apiManual, apiAutomation ];
let fullStackQANew = [...manualQA, ...automationQA, ...apiManual, ...apiAutomation ]
let fullStackQANewA = [...manualQA, automationQA, ...apiManual, apiAutomation ]

console.log(fullStackQA);
console.log("Single Array")
 console.log(fullStackQANew);
 console.log("Single Array with Object")
  console.log(fullStackQANewA);






/* ------------------------------------------------*/
console.log("Comparing the Reference Objects of The Array")
let arrNew = [10, 20, 30];
let arrTwoNew = [10, 20, 30];

console.log(arrNew == arrTwoNew);   // false
console.log(arrTwoNew === arrNew);  // false
console.log(arrNew == arrNew);   // It is uncessary as we dont recommand to compare self Object Reference Array 




let arrTwoThree = [10, 20, 30];

let arrTwoFour = arrTwoThree;   // Deep Copy

console.log(arrTwoFour === arrTwoThree);  // true
console.log(arrTwoFour == arrTwoThree);  // true


console.log('13. Destructuring Operator - Converting the Array to Non Array ');

let numbers = [10, 20, 30];

let [a1, b1, c1] = numbers;

console.log(a1); // 10
console.log(b1); // 20
console.log(c1); // 30



console.log("Full Stack Check Array")
let fullStackQANewTest = ['Manual Testing', 'Tosca', 'Web Automation Testing', 'UI Automation' ]
console.log(fullStackQANewTest);
let [indexZero, indexThree ] = fullStackQANewTest
console.log(indexZero);
console.log(indexThree); 


console.log('15. Exponential Operator');

let result = 2 ** 3;

console.log(result);
// 8

console.log('17. Left Shift Operators');

let a2 = 5;   //8,4,2,1  0101
// 1 0 1 0

console.log(a2 << 1);
// 10  
 /*
Exaplanation
 5 = 0101

5 << 1
   ↓
1010 = 10
 */

console.log('18. Right Shift Operators');

let b2 = 10;   //8 4 2 1  -----> 1 0 1 0

console.log(b2 >> 1);
// 5
/*
Exaplanation
10 = 1010

10 >> 1
     ↓
0101 = 5
*/
let fullStackQANewTestA = [
    'Manual Testing', 67,
    'Tosca',
    'Web Automation Testing',
    'UI Automation'
];

console.log(fullStackQANewTestA);

let [indexZeroA, indexTwoA, indexThreeA] = fullStackQANewTestA;

console.log(indexZeroA);
console.log(indexTwoA);
console.log(indexThreeA);


console.log("Full Stack Check Array with Skip");

let fullStackQANewTestAA = [
    'Manual Testing',
    'Tosca',
    'Web Automation Testing',
    'UI Automation'
];

console.log(fullStackQANewTestAA);

let [indexZeroAA,indexTwoAA, , indexThreeAA] = fullStackQANewTestAA;

console.log(indexZeroAA);
console.log(indexTwoAA);
console.log(indexThreeAA);

