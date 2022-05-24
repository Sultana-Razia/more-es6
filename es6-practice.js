//1. let const
const name = 'Sultana Razia';
let balance = 12000;
balance = 24000;
//2. template string
const multiline = `
    This is my first line.
    This is secon line.
    Third line is here.
    My name is ${name};
`;
console.log(multiline);
//3. arrow function
const multifly = number => number * 2;;
console.log(multifly(23));

const devided = num => {
    return num / 5;
};
console.log(devided(20));

//
const doMath = (num1, num2) => {
    const result = (num1 + 2) * (num2 + 2);
    return result;
}
console.log(doMath(2, 2));

//
const multiflyThree = (num1, num2, num3) => {
    const result = num1 * num2 * num3;
    return result;
}
console.log(multiflyThree(2, 2, 2));

//
const numbers = [10, 20, 30, 40, 50, 11, 33, 55, 77];
const multiflyNumbers = num => {
    return num * 5;
}
const newArray = numbers.map(multiflyNumbers);
console.log(newArray);

//
const oddNumbers = num => {
    return num % 2 != 0;
};
const filterArray = numbers.filter(oddNumbers);
console.log(filterArray);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'blue' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 300, color: 'white' }
];
const found = products.find(product => product.price == 5000);
console.log(found);

//distructuring
const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: 2473905720, address: 'Chadpur', dress: 'Silver' };
const { price } = fish;
console.log(price);

const { color } = products[2];
console.log(color);

//
const sum = (num1, num2, num3 = 7) => {
    return num1 + num2 + num3;
};
console.log(sum(2, 2));