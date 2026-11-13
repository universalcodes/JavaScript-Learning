const numbers = [10, 25, 30, 25, 40, 25];

// const first25 = numbers.find(num => num === 25);
// console.log(first25); 

// const all25s = numbers.filter(num => num === 25);
// console.log(all25s); 



const ages = [12, 18, 21, 16, 30];

const firstAdult = ages.find(age => age >= 18);
console.log(firstAdult); // 18

const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 21, 30]


const a = [78, 456, 718, 456];

console.log(a.find(value => value > 400));   // 456
console.log(a.filter(value => value > 400)); // [456, 718, 456]

//const numbers = [10, 25, 30, , 40, 25];

const first25 = numbers.find(num => num === 25);
console.log(first25); 

const all25s = numbers.filter(num => num === 25);
console.log(all25s);


const invalidvalue = numbers.find(num => num === 100);
console.log(invalidvalue); 

const invalidvalue2 = numbers.filter(num => num === 100);
console.log(invalidvalue2);



const items = ['CD', true, 'A', false, 'Music', 'B', 42, 'Music', 'Music','MUSIC'];

const findvalue = items.find(num => num === 'Music');
console.log(findvalue); 

const filtervalue2 = items.filter(num => num === false);
console.log(filtervalue2);

const findvalue1 = items.find(num => num === 'Music');
console.log(findvalue1); 

const filtervalue3 = items.filter(num => num === 'Music');
console.log(filtervalue3);

const findvalueCAP= items.find(num => num === 'MUSIC');
console.log(findvalueCAP); 

const filtervalueCAP = items.filter(num => num === 'MUSIC');
console.log(filtervalueCAP);

//const ages = [12, 18, 21, 16, 30,'18'];//
const ages2 = ['18',12, 18, 21, 16, 30];
const ages3 = [18,12, 18, 21, 16, 30];
const ages4 = [18, 12, 18, 21, 16, 30
    
];



const firstAdult55 = ages.find(age => age === 18);
console.log(firstAdult55+1); // 18

const adults55 = ages4.filter(age => age == 18);
console.log('below should be 19')
console.log(adults55 + 1); // [18, 21, 30]

console.log(adults55); // [18, 21, 30]
console.log('Done'); // [18, 21, 30]