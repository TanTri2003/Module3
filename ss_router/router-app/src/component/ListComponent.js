import React, { useEffect, useRef, useState } from 'react';
import { deleteStudentById, getAllStudent, searchStudentByName } from '../service/studentService';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function ListComponent() {
    const [studentList, setStudents] = useState([]);
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [deleteStudent, setDeleteStudent] = useState({id:"",name:""})
    const searchRef = useRef()
    useEffect(() => {
        const fectchData = async()=>{
            const list = await getAllStudent()
            setStudents(list)
        }
        fectchData()
    }, [isLoading])
    const handleClose = () => {
        setShow((pre) => !pre)
    }
    const handleShow = (students) => {
        setShow((pre) => !pre)
        setDeleteStudent(students)
    }
    const handleDelete=()=>{
        deleteStudentById(deleteStudent.id)
        setIsLoading(pre=>!pre);
        handleClose()
    }
    const handleSearch=()=>{
    let searchName = searchRef.current.value
    const fectchData = async()=>{
        const list = await searchStudentByName(searchName)
        setStudents(list)
    }
    fectchData()
    }
    return (
        <>
            <h3>Danh sách học sinh</h3>
            <button ><Link style={{color:'white', textDecoration:'none'}} to={'/student/creat'} >Thêm sinh viên</Link></button>
            <br/>
            <br/>
            <input ref={searchRef} name={'searchName'} placeholder={'Nhập tên cần tìm'}/>
            <button onClick={handleSearch} className={'btn btn-success btn-sm'} type={'button'}>Search</button>
            <br/>
            <br/>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>Country</th>
                        <th>Detail</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {studentList && studentList.map((students, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{students.name}</td>
                            <td>{students.phone}</td>
                            <td>{students.email}</td>
                            <td>{students.gender}</td>
                            <td>{students.hobby}</td>
                            <td>{students.country.name}</td>
                            <td><Link to={'/student/detail/' + students.id} className={'btn btn-primary btn-sm'} >Detail</Link></td>
                            <td><Button className={'btn btn-primary btn-sm'}  variant="primary" onClick={()=>{
                                handleShow(students)
                            }}>
                                Delete
                            </Button>
                            </td>
                            <td><button className={'btn btn-primary btn-sm'}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa {deleteStudent.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ListComponent;