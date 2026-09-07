/* Incorrect Syntax
do
{

}
while()
{

}
*/


/* correct Syntax
do
{

}
while();
*/

console.log("Do While Loop - Situation one While is True")
let i =1
do{
console.log("I is Printed"+i)

    i++;
}
while(i<=5);

/*
console.log("Do While Loop - Situation Two - Scope is not defined While While")

do{
    let i =1
console.log("I is Printed")
    i++;
}
while(i<=5); // Run Time Error as i is defined within do block
*/

console.log("Do While Loop - Situation Three While is True")
 i =-6
do{
console.log("I is Printed"+i)

    i++;
}
while(i<=5);

console.log("Do While Loop - Situation Four While is False")
 i =60
do{
console.log("I is Printed"+i)

    i++;
}
while(i<=5);


console.log("Nested Do While Loop - Situation Five While is True ")
 i =60
let j = 60
do
{
    if (i>=60)
    {
        console.log("IF Condition Value is True ")
        do
        {
        console.log("Inner While True I is Printed "+i)
         i++;
        }
        while(i<=65);
    }
 console.log("J is Printed "+j)
         j++;
}
while(j<=65);




console.log("Nested Do While Loop - Situation Six While is True ")
 i =60
 j = 60
do
{
       do
        {
        console.log("Inner Do While True I is Printed "+i)
         i++;
        }
        while(i<=65);
    
 console.log("J is Printed "+j)
         j++;
}
while(j<=65);
