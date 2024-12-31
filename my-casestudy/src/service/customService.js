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