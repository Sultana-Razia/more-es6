const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const friendLength = friends.map(friend => friend.length);
console.log(friendLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yelow' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 300, color: 'white' }
];
const productNames = products.map(product => product.name);
console.log(productNames);

const productprices = products.map(product => product.price);
console.log(productprices);

// products.map(product => console.log(product));
products.forEach(product => console.log(product));

