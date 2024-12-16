import axios from "axios"
// const studentList = [
//     {
//         id: 1,
//         name: "Trí1",
//         phone: "0359694849",
//         email: "votantri2006@gmail",
//         gender:"Nam",
//         hobby:"Đọc sách",
//         country:"Quảng Nam"
//     },
//     {
//         id: 2,
//         name: "Trí2",
//         phone: "0359694849",
//         email: "votantri2007@gmail",
//         gender:"Nam",
//         hobby:"Đọc sách",
//         country:"Quảng Nam"
//     },
//     {
//         id: 3,
//         name: "Trí3",
//         phone: "0359694849",
//         email: "votantri2008@gmail",
//         gender:"Nam",
//         hobby:"Đọc sách",
//         country:"Quảng Nam"
//     },
// ]
export async function getAllStudent() {
    try {
        const reponse =await axios.get("http://localhost:8800/students")
        return reponse.data
    } catch (error) {
        return []
    }
}
export async function searchStudentByName(searchName) {
    try {
        const reponse =await axios.get(`http://localhost:8800/students?name_like=${searchName}`)
        return reponse.data
    } catch (error) {
        return []
    }
}
export async function addComponent(students) {
    try {
        const reponse =await axios.post("http://localhost:8800/students",students)
    } catch (error) {
        return []
    }
}
export async function findStudentById(id) {
    try {
        const reponse =await axios.get("http://localhost:8800/students/"+id)
        return reponse.data
    } catch (error) {
        return null
    }
}
export async function deleteStudentById(id) {
    try {
        const reponse =await axios.delete("http://localhost:8800/students/"+id)
    } catch (error) {
        return []
    }
}