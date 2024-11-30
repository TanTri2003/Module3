import React, { useEffect, useState } from 'react';
import { getAllStudent } from '../service/studentService';
import { Link } from 'react-router-dom';

function ListComponent() {
    const [studentList,setStudents] = useState([]);
   useEffect(()=>{
    const listStudent = getAllStudent();
    setStudents(()=>((
        [
            ...listStudent
        ]
    )))
   },[])
    return (
        <>
            <h3>Danh sách học sinh</h3>
            <button><Link to={'/products/creat'} >Thêm sinh viên</Link></button>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList && studentList.map((students, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{students.name}</td>
                            <td>{students.phone}</td>
                            <td>{students.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
export default ListComponent;