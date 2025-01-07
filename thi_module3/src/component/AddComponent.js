import React, { useState } from 'react'
import { addComponent } from '../service/productService'
import { useNavigate } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/AddComponent.css'
function AddComponent() {
    const [products, setProducts] = useState({ title: "", description: "", price: "" })
    const navigate = useNavigate()
    const handleSubmit = async (value, { resetForm }) => {
        await addComponent(value)
        resetForm()
        toast.success("Thêm mới thành công", {
            autoClose: 1000
        })
        navigate(-1)
    }
    const handleBack = () => {
        navigate(-1)
    }
    const handleValidation = Yup.object({

    })
    return (
        <>
            <Formik initialValues={products} onSubmit={handleSubmit} validationSchema={handleValidation}>
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
                    <button type='button' onClick={handleBack} style={{marginLeft:"10px"}}>Trở lại</button>
                </Form>
            </Formik>
        </>
    )
}
export default AddComponent