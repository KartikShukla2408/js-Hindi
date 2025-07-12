

// There are two ways to decalre an object

// 1- Constructor. (Singleton )  Object.create   <--  this is the way to declare through constructor.

// 2- Object Literals.   let UserJS = {} <-- this is the way to declare through literals

// Object contains Key Value pairs.


// this is object declaration

const sym = Symbol['Key1'];


let JsUser = {
    name:"Kartik",
    "full name": 'Kartik Shukla',
    [sym] : 'myKey1',
    age: 18,
    location: 'Jaipur',
    email: 'kartik@google.com',
    isLoggedIn: false,
    lastLogin:['Monday', 'Wednesday', 'Friday']
}

// this is object calling

// console.log(JsUser.lastLogin); // by this way we can access the values of our object.

// console.log(JsUser["full name"]); // this is another way of accessing the values of our objects.

// console.log( typeof JsUser[sym]); // this is how we access symbol datatype in JS.


// How to change the value of Object.

// JsUser.email = "Kartik.shukla@chatGPT.com";

// console.log(JsUser.email);

// We can also freeze our object that no one can change it.

// Object.freeze(JsUser); // this is the way where we can freeze our object and stop someone from changing its data.

// JsUser.email = "Kartik.shukla@chatgpt.com";

// console.log(JsUser);

// JsUser.greeting = function ()
// {
//     console.log('Hello JS user!!');
// } 
// console.log(JsUser.greeting());

////// This function is used to give refference to the same object

// JsUser.greeting2 = function()
// {
//     console.log(`Hello ${this["full name"]} your age is ${this.age}  and your current location is ${this.location}`);
// }

// console.log(JsUser.greeting2())



