class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    };
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support web dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
};

const amir = new Support('Amir Khan', 'BD', 11);
console.log(amir);

const salman = new Support('Salman Khan', 'Dubai', 4);
console.log(salman);

amir.startSession();
salman.startSession();


class StudentCare extends TeamMember {
    designation = 'Care web dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

const alia = new StudentCare('Alia Bhutt', 'Mumbai');
console.log(alia);


class NaptuneDev extends TeamMember {
    codeEditor;
    designation = 'Naptune app dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'Release app version', version);
    }
}
const ash = new NaptuneDev('ash', 'Mumbai', 'Android Studio');
console.log(ash);
ash.releaseApp('1.4.5');
