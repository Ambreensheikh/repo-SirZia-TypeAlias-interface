//simple function is used in blocked scope
const person = {
    name: "Ali",
    age : 23,
    hobbies : ["coding","writing"],
    greet :function(){
        return `Hello ,${this.name}`
    }
};
//Arrow function is used in global scope
console.log(person.greet());
let greet1 =  () => {
    return `Your age is ${person.age} .`
};
console.log(greet1());
//INTERFACE is used for objects
//type alias used for objects, variables,arrays,objects

  //TYPE ALIAS
type forAll = string | number | boolean | string[];
let car:forAll = "toyota";
let fruits:forAll = ["apple", "banana", "pear", "kiwi"]
 //INTERFACE
 interface Student{
    name:string,
    age : number,
    hobbies:string[],
    greet? : any,
    [key:string] : any // INDEX SIGNATURE

 }
 const student = {
    name: "Ali",
    age : 23,
    hobbies : ["coding","writing"],
    greet :function(){
        return `Hello ,${this.name}`
    }
};

