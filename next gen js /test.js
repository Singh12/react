// Let and const

let myName = "rajnish";
console.log(myName);
 myName = "raj";
console.log(myName);

// function in javascript

function myFun() {
    let a = 10;
    console.log(a+a);
}

myFun();

// arrow function

let myfun_arrow = () => {
    let a = 10;
    console.log("using arrow function", a+a);
}
myfun_arrow();


// Export and import 

const person= {
    name: 'Rajnish'
}
export default person;
// Imports default and ONLY export of the file Name in the receiving file is up to you.  
export const clean = () => {};

export const baseDate = 10;


// Class property and Method

// class is a blue print of object

class Person {
    name = 'Max'; //Propert

    call = () => {} //Method
}

// Class instentiate using new keyword

const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
 class Per extends Person {

 }


 /// Classes and propert & Methods

 // In es7 we can skip the constructor call by using property name 
 // constructor() {this.mypro="fdvbsf"} insted of that we can write mypro = "jbdf"; both are some but useing es7

 //Es7  method

 myMethod = () => {};

 // you will not get any this reference error

 // Spread and rest opertator

 //spread: Used to split up array elements OR object Properties
 // spread take out all element all arry and all object and distribute then in a new property and array
const oldArry = [1,2,3,4];
 const newarray = [...oldArry,1,2]; // addding all old array to new array
 const newObject = {...oldObject, newProp:5} // adding all newObject to old obect
 // Rest operator

 // Used to merge a list of function arguments into an array

 function sortArgs(...args) {
     retrun args.sort();
 }


// Destructuring

// Easly extract array elements or object properties and store them in veriables

// pull out single value and stroe into a variable

[a,b] = ['Hello','Rajnish'];
console.log(a); // Hello
console.log(b); // Rajnish
// assign into a variable a and b


// Object Destructuring

{name} = {name: 'Max', age : 28}
console.log(name) //Max
console.log(age) //undefined

// Reference and Primitive Type Refresher
// num string and boolen are primitive type

const num =1; //primitive type
const num2 = num; //copy of data to num2 from num1


// Referance type object

const person ={
    name: 'Max'
};

const secondPerson = person;
// here we are copying pointer of the object not the actual object copying

console.log(secondPerson);
// o/p : [object Object]{ name: "Max"}
// store in memoery and then copy the data

person.name = 'menu';

console.log(secondPerson);
// o/p : [object Object]{ name: "Menu"}

// Create a real copy of the object not pointer

const secondPerson = {
    ...person 
}; //this will create a exact copy of object not the memory pointer
// object and array are reference type
// when you reassign them means you are copying the pointer not the value
// if you want to copy real value then copy the object propert not the reference

//Refreshing Array Functions

