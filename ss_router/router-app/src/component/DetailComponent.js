import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { findStudentById } from '../service/studentService';

function DetailComponent(){
    const [students,setStudent] = useState({id:"",name:"",phone:"",email:""})
    const {id} = useParams();
    useEffect(()=>{
        setStudent(()=>({
            ...findStudentById(id)
        }))
    },[])
    return(
        <>
        <h3>Chi tiết</h3>
        <p>ID: {students.id}</p>
        <p>Name: {students.name}</p>
        <p>Phone: {students.phone}</p>
        <p>Email: {students.email}</p>
        </>
    )
}
export default DetailComponent;