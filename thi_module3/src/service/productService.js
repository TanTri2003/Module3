import axios from "axios"

export async function getAllProduct(products) {
    try {
        const reponse = await axios.get(`http://localhost:3000/products`)
        return reponse.data
    } catch (error) {
        return []
    }
}
export async function findProductById(id) {
    try {
        const reponse = await axios.get(`http://localhost:3000/products/${id}`)
        return reponse.data
    } catch (error) {
        return null
    }
}
export async function addComponent(products) {
    try {
        const reponse = await axios.post(`http://localhost:3000/products`, products)
    } catch (error) {
        return []
    }
}
export async function deleteProductById(id) {
    try {
        const reponse = await axios.delete(`http://localhost:3000/products/${id}`)
    } catch (error) {
        return []
    }
}
export async function updateProduct(id, products) {
    try {
        const reponse = await axios.put(`http://localhost:3000/products/${id}`, products)
    } catch (error) {
        return []
    }
}