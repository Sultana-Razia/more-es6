const numbers = [5, 13, 7, , 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);

const smallNUmbers = numbers.filter(number => number < 10);
// console.log(smallNUmbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 300, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'blue');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);