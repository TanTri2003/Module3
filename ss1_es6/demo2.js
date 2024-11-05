// default param : giá trị mặc định của tham số

// const sum=(a=1,b=1)=>a+b;
// console.log(sum(10,20)); // 30
// console.log(sum());  // 2

// Destructuring: phân rã mảng/ đối tượng để lấy ra phần tử hoặc thuộc tính dễ dàng hơn
// let mang = [23,2,5,7,34,6];
// let students = {
//     id:1,
//     name:"trí"
// }
// muốn lấy 2 phần tử đầu tiên
// cách 1
// let a = mang[0]
// let b = mang[1]

// cách 2
// const [a,b] = mang; // đầu mảng
// const [a,b,...rest] = mang // cuối mảng
// console.log(a);
// console.log(b);
// console.log(rest);
// const{name,id} =students
// console.log(name);
// console.log(id);

// rest param
// const sum = (...rest)=>{
//     let tong = 0;
//     for(let i = 0; i<rest.length;i++){
//         tong+= rest[i]
//     }
//     return tong;
// }
// console.log(sum(3,4,6,7,8,9,1,3));

// toán tử spreed: sao chép hoặc gộp
// let mang2 = [2,4,6,8];
// let mang3 = [...mang,...mang2]
// console.log(mang3);

// thêm thuộc tính cho đối tượng
// students = {
//     ...students,
//     age: 40
// }
// console.log(students);






