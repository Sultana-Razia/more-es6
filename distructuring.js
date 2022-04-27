const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: 2473905720, address: 'Chadpur', dress: 'Silver' };

/* const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id; */


const { phone, price, dress, id } = fish;

/* console.log(phone);
console.log(price);
console.log(dress);
console.log(id); */

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development', employee: 22, framework: 'react',
        tech: {
            first: 'html', second: 'css', third: 'js'
        }
    }
};
const { work, framework } = company.web;
const { food } = company.ceo;
const { first, third } = company.web.tech;
console.log(work, framework, food, first, third);