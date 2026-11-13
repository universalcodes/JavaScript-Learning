const prices = [150, 450, 250, 700];

const affordable = prices.filter(checkValue => checkValue < 500);

console.log(affordable); // [150, 450, 250]


const testData = [67, 89, 345, 23, 287, 0, -1];

const testDataResult = testData.filter(validValue => validValue > 250);

console.log(testDataResult); // [150, 450, 250]

 const Names = ['Orange', 'Banana', 'Apple'];

 const fruitName = testData.filter(fruitFilter => fruitFilter = 'Apple');

 console.log(fruitName); // [150, 450, 250]



//  const prices = [150, 450, 250, 700];

// const affordable = prices.filter(checkValue => checkValue < 500);

// console.log(prices.); // [150, 450, 250]


const items = ["CD", true, "A", false, "Music", "B", 42];

const booleans = items.filter(item => typeof item === "boolean");
const strings = items.filter(item => typeof item === "string");
const characters = items.filter( item => typeof item === "string" && item.length === 1
);

console.log(booleans);   // [true, false]
console.log(strings);    // ["CD", "A", "Music", "B"]
console.log(characters); // ["A", "B"]