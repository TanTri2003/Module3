// sử dụng để kết nối api
const studentList = [
    {
        id:1,
        name: "Trí1",
        phone: "0359694849",
        email: "votantri2006@gmail",
    },
    {
        id:2,
        name: "Trí2",
        phone: "0359694849",
        email: "votantri2007@gmail",
    },
    {
        id:3,
        name: "Trí3",
        phone: "0359694849",
        email: "votantri2008@gmail",
    },
]
export function getAllStudent() {
    // kết nối API của back-end
    return studentList;
}
export function addNewCustomer(students) {
    // kết nối API để thêm mới
    studentList.push(students);
}
export function deleteCustomerId(name) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].name === name) {
            studentList.splice(i, 1);
            break;
        }
    }
}
export function editCustomerId(name) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].name === name ) {
            studentList.splice(i, 1);
            break;
        }
    }
}
export function searchByName(name){
    return studentList.filter((students)=>students.name.includes(name))
}