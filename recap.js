//let const
const name = 'Sultana Razia';
let phone = 'iphone 15';
phone = 'Sansang Galaxy';
console.log(phone);

//template string
const myNotes = `My name is ${name}. And my phone is ${phone}`
console.log(myNotes);

// default parameter
//spread or three dots (...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

//arrow function
const square = x => x * x;
console.log(square(9));