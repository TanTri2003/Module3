import React, { useEffect, useState } from 'react';
import { addComponent, updateStudent } from '../service/studentService';
import { useNavigate } from 'react-router-dom';
import { Field, Formik, Form, ErrorMessage } from 'formik'
import { useParams } from 'react-router-dom';
import { findStudentById } from '../service/studentService';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCountry } from '../service/conutryService';

function EditComponent() {
    const { id } = useParams()
    const [student, setStudent] = useState(null);
    const [countryList, setCountryList] = useState([])
    useEffect(() => {
        const fectchData = async () => {
            const list = await getAllCountry()
            setCountryList(list)
        }
        fectchData()
    })
    useEffect(() => {
        const fectStudent = async () => {
            let student = await findStudentById(id);
            console.log("----------------------------");
            console.log(student);
            student = {
                ...student,
                country: JSON.stringify(student.country)
            }
            setStudent(student)
        }
        fectStudent()
    },[])
    const navigate = useNavigate()
    const handleSubmit = async (value) => {
        console.log("handle submit--------------------")
        console.log(value);
        const newStudent = {
            ...value,
            country: JSON.parse(value.country)
        }
        await updateStudent(id, newStudent);       
        toast.success("Chỉnh sửa thành công", {
            autoClose: 1000
        })
        navigate('/student')
    }
    const handleValidate = Yup.object({
        // id: Yup.number().required("Yêu cầu không để trống"),
        name: Yup.string().required("Yêu cầu không để trống").matches(/^[a-zA-ZÀ-ỹ\s]+[a-zA-ZÀ-ỹ]+$/, "Tên chưa đúng định dạng"),
        phone: Yup.number(/^\d{9}$/, "Hãy nhập 9 số").required("Yêu cầu không để trống"),
        email: Yup.string().required("Yêu cầu không để trống").matches(/^\S+@\S+\.\S+$/, "Hãy nhập đúng định dạng"),
        country: Yup.string().required("Yêu cầu chọn")
    })
    if (student == null) {
        return ""
    }
    return (
        <>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>Name :</label>
                        <Field type='text' name='name' />
                        <ErrorMessage style={{ color: 'red' }} name='name' component='div' />
                    </div>
                    <div>
                        <label>Phone :</label>
                        <Field type='text' name='phone' />
                        <ErrorMessage style={{ color: 'red' }} name='phone' component='div' />
                    </div>
                    <div>
                        <label>Email :</label>
                        <Field type='text' name='email' />
                        <ErrorMessage style={{ color: 'red' }} name='email' component='div' />
                    </div>
                    <div>
                        <label>Giới Tính :</label>
                        <Field type='radio' name='gender' value="Nam" /> Nam
                        <Field type='radio' name='gender' value="Nữ" /> Nữ
                        <ErrorMessage style={{ color: 'red' }} name='gender' component='div' />
                    </div>
                    <div>
                        <label>Sở Thích :</label>
                        <Field type='checkbox' name='hobby' value="Đọc Truyện" /> Đọc Truyện
                        <Field type='checkbox' name='hobby' value="Chơi_Game" /> Chơi game
                        <Field type='checkbox' name='hobby' value="Đọc_sách" /> Đọc sách
                        <ErrorMessage style={{ color: 'red' }} name='hobby ' component='div' />
                    </div>
                    <div>
                        <label>Quê Quán :</label>
                        <Field as='select' name='country'>
                            <option value={''}>Select</option>
                            {countryList.map((m) => (
                                <option value={JSON.stringify(m)}>{m.name}</option>
                                

                            ))}
                        </Field>
                        <ErrorMessage style={{ color: 'red' }} name='country' component='div' />
                    </div>
                    <button type='submit'>Update</button>
                </Form>
            </Formik>
        </>
    )
}
export default EditComponent;