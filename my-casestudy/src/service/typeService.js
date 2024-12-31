import axios from "axios"

export async function getAllType() {
    try {
        const res = await axios.get("http://localhost:8800/type")
        return res.data
    } catch (error) {
        return []
    }
}
