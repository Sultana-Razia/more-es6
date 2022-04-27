const numbers = [4, 6, 8, 10];
const output1 = [];
for (const number of numbers) {
    const result = number * 2;
    output1.push(result);
};
console.log('output1', output1);


/* function doubleIt(number) {
    return number * 2;
}
const result = doubleIt(10);
console.log(result); */


// const numbers = [4, 6, 8, 10];
const output2 = [];
const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
console.log('output2', output2);

/* 
1. loop through each element
2. For element call the provided function 
3. Result for each element will be store in an array 
*/

const output3 = numbers.map(doubleIt);
console.log('output3', output3);

const output4 = numbers.map(number => number * 2);
console.log(output4);

const output = numbers.map(x => x * 2);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);