import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { ErrorMessage,Form, Field, Formik } from 'formik'
import { toast } from 'react-toastify'
import { getAllType } from '../../service/typeService'
import { findCustomById, updateCustom } from '../../service/customService'

function EditComponent() {
    const { id } = useParams()
    const [custom, setCustom] = useState(null)
    const [typeList, setTypeList] = useState([])
    useEffect(() => {
        const fectchData = async () => {
            const list = await getAllType()
            setTypeList(list)
        }
        fectchData()
    })
    useEffect(() => {
        const fectchCustom = async () => {
            let custom = await findCustomById(id);
            console.log("----------------------------");
            console.log(custom);
            custom = {
                ...custom,
                type: JSON.stringify(custom.type)
            }
            setCustom(custom)
        }
        fectchCustom()
    }, [])
    const navigate = useNavigate()
    const handleSubmit = async (value) => {
        console.log("handle submit--------------------")
        console.log(value);
        const newCustom = {
            ...value,
            type: JSON.parse(value.type)
        }
        await updateCustom(id, newCustom)
        toast.success("Chỉnh sửa thành công", {
            autoClose: 1000
        })
        navigate('/home')
    }
    if (custom == null) {
        return ""
    }
    return (
        <>
            <Formik initialValues={custom} onSubmit={handleSubmit} >
                <Form>
                    <div>
                        <label>Type :</label>
                        <Field as='select' name='type'>
                            <option value={''}>Select</option>
                            {typeList.map((m) => (
                                <option key={m.id} value={JSON.stringify(m)}>{m.name}</option>
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
                    <button type='submit'>Update</button>
                </Form>
            </Formik>
        </>
    )
}
export default EditComponent;