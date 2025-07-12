// console.log('Kartik Shukla');

///// Singleton object or creating objects via constructor

// const tinderUser =  new Object()  // this is creating via singleton object or constructor

// const tinderUser=
// {

// } // this is literal way of creating objects

// console.log(tinderUser);


const tinderUser = 
{}
    tinderUser.id="IN0024nq",
    tinderUser.name="Kartik Shukla",
    tinderUser.age= 18,
    tinderUser.IsLoggedIn= false


// console.log(tinderUser);

//// This is an example of nested object


// const bumbleUser = {
//     email:"some@gmail.com",
//     name:
//     {
//         Fullname :
//         {
//             first_name:'Kartik',
//             last_name:'Shukla'
//         }
//     },
//     contact_no:+91-8005622048
// }

// console.log(bumbleUser.name.Fullname.first_name); // this is how we access nested object


// const obj1 = {1: "a", 2:"b", 3:"c"};
// const obj2 = {4: "d", 5:"e", 6:"f"};

// const obj3 = Object.assign({} ,obj1 , obj2)
// console.log(obj3);

// this is how we merge two or more object into one object.

// const obj3 = {...obj1 , ...obj2}; // best practice to merge to objects using spread operator
// console.log(obj3);

// console.log(Object.keys(tinderUser));  // This will give all the keys of the object
// console.log(Object.values(tinderUser)); // This will return all the values of the object
// console.log(Object.entries(tinderUser)); // This will return all the key value of the objects

// console.log(tinderUser.hasOwnProperty('IsLoggedOut')); // This will chck if the object contains the key or value that we are searching for.
