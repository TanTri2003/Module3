import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/AddComponent.css'
import { findProductById, updateProduct } from '../service/productService';
function EditComponent() {
    const { id } = useParams()
    const [products, setProducts] = useState(null)
    useEffect(() => {
        const fectchProduct = async () => {
            let product = await findProductById(id);
            setProducts(product)
        }
        fectchProduct()
    }, [])
    const navigate = useNavigate()
    const handleSubmit = async (value) => {
        await updateProduct(id, value)
        toast.success("Chỉnh sửa thành công", {
            autoClose: 1000
        })
        navigate(-1)
    }
    const handleBack = () => {
        navigate(-1)
    }
    if (products == null) {
        return "không hiển thị"
    }
    return (
        <>
            <Formik initialValues={products} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Tên sản phẩm</label>
                        <Field type='text' name='title' />
                    </div>
                    <div>
                        <label>Mô tả</label>
                        <Field type='text' name='description' />
                    </div>
                    <div>
                        <label>Giá</label>
                        <Field type='text' name='price' />
                    </div>
                    <button type='submit' >Save</button>
                    <button type='button' onClick={handleBack} style={{ marginLeft: "10px" }}>Trở lại</button>
                </Form>
            </Formik>
        </>
    )
}
export default EditComponent