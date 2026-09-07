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

let a = [78, 456, 718];  // this is for java not for JavaScript


console.log('Get the List Count of Arrays - It will add the Element in the list inside the Array');
console.log(a.length) //1

console.log('Push push() the Element - It will add the Element in the list at the last inside the Array');
console.log('Before Push:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically
a.push(489);
console.log('After Push:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically

console.log('Pop pop() the Element - It will delete the Element in the list at the last inside the Array');
console.log('Before Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically
a.pop();
console.log('After Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically

console.log('Before Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically
a.pop();
console.log('After Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically

console.log('Before Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically
a.pop();
console.log('After Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically

console.log('Before Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically
a.pop(178);
console.log('After Pop:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically


a = [78, 456, 718];  // this is for java not for JavaScript
console.log('New Array:', a); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically
console.log('Include includes() the Element - It checks the Element in the list present or not inside the Array');

let validateValidElement = a.includes(718);
console.log(validateValidElement); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically

console.log('Include includes() the Element - It checks the Element in the list present or not inside the Array');

let validateInValidElement = a.includes(7118);
console.log(validateInValidElement); // To Print Complete Array  toString() is the inbuilt method helps to entire Arrays Values Automatically


console.log('Add the Element to first Index use unshift() Method');
console.log('Before Unshift :Updated arrays as follows\t'+a);
a.unshift(178);
console.log('After Unshift :Updated arrays as follows\t'+a);


console.log('Remove the Element from first Index use shift() Method');
console.log('Before shift :Updated arrays as follows\t'+a);
a.shift();
console.log('After shift :Updated arrays as follows\t'+a);



