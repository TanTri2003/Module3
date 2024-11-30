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
export function getAllStudent(){
    return studentList;
}
export function addComponent(students){
    studentList.push(students)
}