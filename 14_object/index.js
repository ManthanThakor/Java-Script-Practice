

// ________________________________________________OBJECT________________________________________________________________

// JavaScript Objects
// You have already learned that JavaScript variables are containers for data values.
// The values are written as name:value pairs (name and value separated by a colon).
// It is a common practice to declare objects with the const keyword.


let person = {
    name: "ROCK",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        country: "USA"
    },
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing properties of the object
console.log(person); // { name: 'ROCK', age: 30,  isStudent: false, address: { city: 'New York', country: 'USA' },  sayHello: [Function: sayHello]  }
console.log(person.name); // Output: "rock"
console.log(person.age); // Output: 30
console.log(person.address.city); // Output: "New York"
console.log(person.address.country); // Output: "USA"

// Calling a method of the object
person.sayHello(); // Output: "Hello, my name is ROCK"

// ---------------

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car.type); // Output: "Fiat"

const persona = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  console.log(persona.firstName); // Output: "John"
  console.log(persona.lastName); // Output: "Doe"
  console.log(persona.age); // Output: 50
  console.log(persona.eyeColor); // Output: "blue"
  console.log(persona["firstName"]); // Output: "John"
  console.log(persona["lastName"]); // Output: "Doe"
  console.log(persona["age"]); // Output: 50
  console.log(persona["eyeColor"]); // Output: "blue"
  console.log(persona.hasOwnProperty("firstName")); // Output: true
  console.log(persona.isPrototypeOf(persona)); // Output: true
  console.log(persona.propertyIsEnumerable("firstName")); // Output: true
  console.log(persona.toString()); // Output: "[object Object]"

// __________________________Object Methods______________________________________

// Object Methods

// Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.


const peArson = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(peArson.fullName()); // Output: "<NAME>"
  console.log(peArson.id); // Output: 5566

//   In the example above, this refers to the person object:
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.
// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.




//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& DANGER &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

/* Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed*/
