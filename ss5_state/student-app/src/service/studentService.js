// sử dụng để kết nối api
const studentList = [
    {
        name: "Trí1",
        phone: "0359694849",
        email: "votantri2006@gmail",
    },
    {
        name: "Trí2",
        phone: "0359694849",
        email: "votantri2006@gmail",
    },
    {
        name: "Trí3",
        phone: "0359694849",
        email: "votantri2006@gmail",
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
export function deleteCustomerId(id) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id === id) {
            studentList.splice(i, 1);
            break;
        }
    }
}