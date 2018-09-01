class Human {
    // Calling constructor in this way
 gender = 'male';
   callGender = () => {
   console.log(this.gender);
    }
}

class Person extends Human {
   name = 'Rajnish';
    callPerson= () => {
        console.log(this.name);
    }
}

let person = new Person();
person.callPerson();
person.callGender();