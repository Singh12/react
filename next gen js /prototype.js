function prototypes(first_name,last_name,age){
    this.firstName = first_name;
    this.lastName = last_name;
    this.personAge = age;
}
prototypes.prototype.name = function() {
    return this.lastName
};
prototypes.prototype.gender = 'Mail';
var pro_object = new prototypes('Rajnish','Kumar',20);
console.log(pro_object.firstName);
console.log(pro_object.name());
console.log(pro_object.gender);
