// console.log("Hello C07");
// function tinhTong(a,b){
//     return a+b;
// }
// console.log(tinhTong(10,20));

// express function
// const sum = function(a,b){

// }

// arrow function

// const sum = (a,b)=>{
//     return a+b;
// }
// console.log(sum(11,22));
// const showMessage = mess =>{
//     console.log(mess);
// }
// // trường hợp code chỉ có 1 lệnh
// showMessage("hello codegym");
// const sum = (s,b) =>a+b;


let array = [10, 3, 4, 7, 9];
// for(let i = 0; i < array.length;i++){
//     console.log(`${i}: ${array[i]}`);
// }
// function display(e,i){
//     console.log(`${i}: ${e}`);
// }
// display gọi là callback function
// truyền một function vào cho một function
// array.forEach(display)
// array.forEach(function(e,i){ 
//     console.log(`${i}: ${e}`);
// });
// array.forEach((e,i)=>{
//     console.log(`${i}: ${e}`);
// });
// let newArray = array.map((e,i)=>{
//     return ++e;
// })
// console.log(newArray);
let students = [
    {
        id: 1,
        name: "trí1"
    },
    {
        id: 2,
        name: "trí2"
    },
    {
        id: 3,
        name: "trí3"
    }
]
const listStudent = students.map((e, i) => {
    return (`<tr>
            <td>${e.id}<\td>
            <td>${e.name}<\td>
        </tr>`);
})
console.log(listStudent);

const fillterStudent = students.filter((e,i)=>{
    return e.id >= 2;
});
// const fillterStudent = students.filter((e,i)=> e.id >= 2);
console.log(fillterStudent);
