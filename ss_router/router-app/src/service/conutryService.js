import axios from "axios"

export async function getAllCountry() {
    try {
        const res =await axios.get("https://provinces.open-api.vn/api/?depth=1")
        return res.data
    } catch (error) {
        return []
    }
}