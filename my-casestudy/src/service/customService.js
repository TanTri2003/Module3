import axios from "axios"

export async function getAllCustom(custom) {
    try {
        const reponse = await axios.get(`http://localhost:8800/dichVu`)
        return reponse.data
    } catch (error) {
        return []
    }
}
export async function searchCustomByName(searchName) {
    let url = ` http://localhost:8800/dichVu?name_like=${searchName}`
    try {
        const reponse = await axios.get(url)
        const data = reponse.data;
        return data
    } catch (error) {
        return []
    }
}

export async function addComponent(custom) {
    try {
        const reponse = await axios.post(`http://localhost:8800/dichVu`, custom)
    } catch (error) {
        return []
    }
}
export async function deleteCustomById(id) {
    try {
        const reponse = await axios.delete(`http://localhost:8800/dichVu/${id}`)
    } catch (error) {
        return []
    }
}
export async function updateCustom(id, customs) {
    try {
        const reponse = await axios.put(`http://localhost:8800/dichVu/${id}`, customs)
        console.log("----------ud-----------");
        console.log(reponse);

    } catch (error) {
        return []
    }
}export async function findCustomById(id) {
    try {
        const reponse = await axios.get(`http://localhost:8800/dichVu/${id}`)
        return reponse.data
    } catch (error) {
        return null
    }
}