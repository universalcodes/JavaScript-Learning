/*
points to remember
1. Ternary Operators contains three operators, it is used to compare value based on the given condition.
        It is a shorter version of if else
            basic syntax as follows
            (condition) ? condition true : condition false  // we can give condition with Bracket
            condition ? condition true : condition false   // we can give condition without Bracket
           condition ? condition false : condition true   // No Compile time but it returns false as false come first even though condition is true
            for example var a = 34;
            var ternaryResult = a==34 ? a:45
 2.To Run JavaScript 
    Open the Terminal  
 These are following steps to run the program
    Ensure that please node has to be installed, following command has to used
    node -v
    Enter the following command to run  the program 
     node "Day001- Assignments\AECart.js"   or
     node "F:\JavaScript Learning\Day001- Assignments\AECart.js"
                
*/

var a = 12;
var b = 56; 
var ternaryResult = (a<b) ? a : b;


