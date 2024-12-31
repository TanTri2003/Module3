import axios from "axios"
let url = `http://localhost:8800/students`
export async function getAllStudent(page, size) {
    try {
        const reponse = await axios.get(`${url}?_sort=name&_order=asc&_page=${page}&_limit=${size}`)
        const data = reponse.data;
        const totatRecord = reponse.headers['x-total-count'];
        return {
            data: data,
            totatRecord: totatRecord
        };
    } catch (error) {
        return []
    }
}
export async function searchStudentByName(searchName, searchCountry,page,size) {
    let url = ` http://localhost:8800/students?name_like=${searchName}&country.id=${searchCountry}&_sort=name&_order=asc&_page=${page}&_limit=${size}`
    if (searchCountry == "") {
        url = ` http://localhost:8800/students?name_like=${searchName}&_sort=name&_order=asc&_page=${page}&_limit=${size}`
    }
    try {
        const reponse = await axios.get(url)
        const data = reponse.data;
        const totatRecord = reponse.headers['x-total-count'];
        return {
            data: data,
            totatRecord: totatRecord
        };
    } catch (error) {
        return []
    }
}
export async function addComponent(students) {
    try {
        const reponse = await axios.post(`${url}`, students)
    } catch (error) {
        return []
    }
}
export async function updateStudent(id, students) {
    try {
        const reponse = await axios.put(`${url}` + id, students)
        console.log("----------ud-----------");
        console.log(reponse);

    } catch (error) {
        return []
    }
}
export async function findStudentById(id) {
    try {
        const reponse = await axios.get(`${url}` + id)
        return reponse.data
    } catch (error) {
        return null
    }
}
export async function deleteStudentById(id) {
    try {
        const reponse = await axios.delete(`${url}` + id)
    } catch (error) {
        return []
    }
}