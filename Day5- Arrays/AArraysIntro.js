/*
Intro to Arrays
// Impossible - let a = 78, 456; To Overcome this we Introduced Arrays

    1.  Arrays - Same kind of Elements/Data/Values in form of Indexing.
    2. Index can be any number though it is not recommended 
    3. we Can Access any index in terms different operations, Delete , Modify , Use 
    4. If we Print Values out of the Index It returns undefined.


    Basic Syntax = 
   let a = [78, 456];  // this is for java not for JavaScript

    Incorrect Syntax
     //let a[] = {78, 456};  // this is for java not for JavaScript
 // let a[] = [78, 456];  // this is Incorrect as Indexing is not applicable on Variables

 
*/

let a = [78, 456, 718, 3456,67,43,7,34,3];  // this is for java not for JavaScript
console.log(a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically
console.log(a[0]); // To Print Specific Element of Array a[0]
console.log(a[2]); // To Print Specific Element of Array a[2]
console.log(a[3]); // To Print Specific Element of Array a[3] which is not present its returns undefined

for (let i = 0 ; i<a.length;i++)   
{
console.log(a[i]); // To Print entire Array use for loop

}
    console.log("Constant "); // To Print entire Array use for loop

for (const arrNew of a)
{
    console.log(arrNew); // To Print entire Array use for loop

}
    console.log("While Loop"); // To Print entire Array use for loop


let y = 0; 
while(y<a.length)
{
       console.log(a[y]); // To Print entire Array use for loop
         y++;



}