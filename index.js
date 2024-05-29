const person = {
    name: "Ali",
    age: 23,
    hobbies: ["coding", "writing"],
    greet: function () {
        return `Hello ,${this.name}`;
    }
};
console.log(person.greet());
let greet1 = () => {
    return `Your age is ${person.age}`;
};
console.log(greet1());
export {};
