// console.log('Kartik')


////       Object Destructure 


let Course =
{
    sub_name: "JS",
    sub_price: 999,
    sub_faculty: "Kartik"

} 
const{sub_faculty: teacher} = Course // this is the code object destructuring

console.log(teacher);

