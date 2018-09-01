class Human {
    constructor () {
        this.gender = 'male';
    }
   callGender(){
   console.log(this.gender);
    }
}

class Person extends Human {
    constructor () {
        super();
        this.name = 'Rajnish';
    }
    callPerson() {
        console.log(this.name);
    }
}

let person = new Person();
person.callPerson();
person.callGender();