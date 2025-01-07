import React, { useEffect, useState } from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import '../../css/AddComponent.css'
import * as Yup from 'yup';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getAllType } from '../../service/typeService';
import { addComponent } from '../../service/customService';

function AddComponent() {
    const [custom, setCustom] = useState({ id: "", type: "", name: "", area: "", rental_cost: "", people: "", rental_type: "", room_standard: "", description: ["Bồn tắm"], floor: "",image:""})
    const [typeList, setTypeList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fectchData = async () => {
            const list = await getAllType()
            setTypeList(list)
        }
        fectchData()
    })
    const handleSubmit = async (value) => {
        const custom = {
            ...value,
            type: JSON.parse(value.type)
        }
        await addComponent(custom)
        toast.success("Thêm mới thành công", {
            autoClose: 1000
        })
        navigate('/home')
    }
    const handleValidation = Yup.object({

    })
    return (
        <>
            <Formik initialValues={custom} onSubmit={handleSubmit} validationSchema={handleValidation}>
                <Form>
                    <div>
                        <label>Type :</label>
                        <Field as='select' name='type'>
                            <option value={''}>Select</option>
                            {typeList.map((m) => (
                                <option value={JSON.stringify(m)}>{m.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage style={{ color: 'red' }} name='type' component='div' />
                    </div>
                    <div>
                        <label>Name :</label>
                        <Field type='text' name='name' />
                        <ErrorMessage style={{ color: 'red' }} name='name' component='div' />
                    </div>
                    <div>
                        <label>Area :</label>
                        <Field type='text' name='area' />
                        <ErrorMessage style={{ color: 'red' }} name='area' component='div' />
                    </div>
                    <div>
                        <label>Rental_cost :</label>
                        <Field type='text' name='rental_cost' />
                        <ErrorMessage style={{ color: 'red' }} name='rental_cost' component='div' />
                    </div>
                    <div>
                        <label>People :</label>
                        <Field type='number' name='people' />
                        <ErrorMessage style={{ color: 'red' }} name='people' component='div' />
                    </div>
                    <div>
                        <label>Rental_type :</label>
                        <Field type='text' name='rental_type' />
                        <ErrorMessage style={{ color: 'red' }} name='rental_type' component='div' />
                    </div>
                    <div>
                        <label>Room_standard :</label>
                        <Field type='text' name='room_standard' />
                        <ErrorMessage style={{ color: 'red' }} name='room_standard' component='div' />
                    </div>
                    <div>
                        <label>description :</label>
                        <Field type='text' name='description' />
                        <ErrorMessage style={{ color: 'red' }} name='description' component='div' />
                    </div>
                    <div>
                        <label>Floor :</label>
                        <Field type='text' name='floor' />
                        <ErrorMessage style={{ color: 'red' }} name='floor' component='div' />
                    </div>
                    <div>
                        <label>Image :</label>
                        <Field type='text' name='image' />
                        <ErrorMessage style={{ color: 'red' }} name='image' component='div' />
                    </div>
                    <button type='submit'>Save</button>
                </Form>

            </Formik>

        </>
    )
}
export default AddComponent