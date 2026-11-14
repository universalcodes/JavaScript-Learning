console.log('Example 1');

var nameUser = 'Yogesh'; // 0,1,2,3,4,5
console.log(nameUser);
console.log(nameUser.length);
var indexReturn = nameUser.indexOf('g');
console.log(indexReturn);

console.log('Example 2');
var nameUser2 = ' Yogesh'; // 0,1,2,3,4,5
console.log(nameUser2);
console.log(nameUser2.length);
var indexReturn2 = nameUser.indexOf('');  // Valid char '' is called Space
console.log(indexReturn2);


console.log('Example 3');
var nameUser3 = ' Yogesh '; // 0,1,2,3,4,5
console.log(nameUser3);
console.log(nameUser3.length);
var indexReturn3 = nameUser3.indexOf('');
console.log(indexReturn3);


console.log('Example 4');
var nameUser4 = 'YogeshY'; // 0,1,2,3,4,5
console.log(nameUser4);
console.log(nameUser4.length);
var indexReturn4 = nameUser4.indexOf('Y');
console.log(indexReturn4);



console.log('Example 5');
var nameUser5 = 'YogeshY'; // 0,1,2,3,4,5
console.log(nameUser5);
console.log(nameUser5.length);
var indexReturn5 = nameUser5.indexOf('5');
console.log(indexReturn5);


console.log('Example 6');
var nameUser6 = 'Asus'; // 0,1,2,3,4,5
console.log(nameUser6);
console.log(nameUser6.length);
var indexReturn6 = nameUser6.indexOf('Asus');
console.log(indexReturn6);

console.log('Example 7');
var nameUser7 = 'Testing'; // 0,1,2,3,4,5
console.log(nameUser7);
console.log(nameUser7.length);
var indexReturn7 = nameUser7.indexOf('TestData');
var indexReturn8 = nameUser7.indexOf('TestinG');
console.log(indexReturn7);
console.log(indexReturn8);




console.log('Example 8');
var nameUser8 = 'Testing'; // 0,1,2,3,4,5
console.log(nameUser8);
console.log(nameUser8.length);
var indexReturn8 = nameUser8.indexOf('TestingA');
console.log(indexReturn8);



console.log('Example 9');
var nameUser9 = 'This is JavaScript'; // 0,1,2,3,4,5
console.log(nameUser9);
console.log(nameUser9.length);
var indexReturn9 = nameUser9.indexOf('JavaScript');
console.log(indexReturn9);


console.log('Example 10');
var nameUser10 = 'This is Cool Testing'; // 0,1,2,3,4,5
console.log(nameUser10);
console.log(nameUser10.length);
var indexReturn10 = nameUser10.indexOf('Fool');
console.log(indexReturn10);




console.log('Example 11');
var nameUser11 ='CoolColdCat';
console.log(nameUser11);
console.log(nameUser11.length);
var indexReturn11 = nameUser11.indexOf('C');
console.log(indexReturn11);
var indexReturn12 = nameUser11.indexOf('C', 1);
console.log(indexReturn12);
var indexReturn13 = nameUser11.indexOf('C', 5);
console.log(indexReturn13);
var indexReturn14 = nameUser11.indexOf('C', 9);
console.log(indexReturn14);


console.log('Example 12');
var nameUser11 ='This is CoolColdCat';
console.log(nameUser11);
console.log(nameUser11.length);
var indexReturn11 = nameUser11.indexOf('C');
console.log(indexReturn11);
var indexReturn12 = nameUser11.indexOf('C', 9);
console.log(indexReturn12);
// var indexReturn13 = nameUser11.indexOf('C', 5);  // Debugging purpose
// console.log(indexReturn13);
var indexReturn14 = nameUser11.indexOf('C', 13);
console.log(indexReturn14);



//  Invalid Use Case
var number = 1234;
console.log(number);
console.log(number.length);
var indexNumber = nameUser11.indexOf(2);
console.log(indexNumber);












// console.log('Example 1 lastIndexOf ');
// var nameUser6 = 'RYogeshKamraR'; // 0,1,2,3,4,5
// console.log(nameUser6);
// console.log(nameUser6.length);
// var indexReturn6 = nameUser6.lastIndexOf('e');
// console.log(indexReturn6);


