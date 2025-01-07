import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { findProductById } from '../service/productService';
function DetailComponent() {
    const [products, setProducts] = useState({ id: "", title: "", price: "", description: "" })
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        const fData = async () => {
            let p = await findProductById(id)
            setProducts(p)
        }
        fData()
    }, [])
    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <>
            <h3>Chi tiết</h3>
            <p>Tên sản phẩm: {products.title}</p>
            <p>Mô tả: {products.description}</p>
            <p>Giá: {products.price}</p>
            <button onClick={handleBack} className={'btn btn-primary btn-sm'}>Trở lại</button>
        </>
    )
}
export default DetailComponent