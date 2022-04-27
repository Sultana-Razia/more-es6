class Support {
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
};
const amir = new Support('Amir Khan', 'BD');
console.log(amir);

const salman = new Support('Salman Khan', 'Dubai');
console.log(salman);

amir.startSession();
salman.startSession();