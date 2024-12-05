import React, { useEffect, useState } from 'react';
import { getAllStudent } from '../service/studentService';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
function ListComponent() {
    const [studentList, setStudents] = useState([]);
    const [show, setShow] = useState(false)
    useEffect(() => {
        const listStudent = getAllStudent();
        setStudents(() => ((
            [
                ...listStudent
            ]
        )))
    }, [])
    const handleClose = () => {
        setShow((pre) => !pre)
    }
    const handleShow = () => {
        setShow((pre) => !pre)
    }
    const handleDelete=()=>{

    }
    return (
        <>
            <h3>Danh sách học sinh</h3>
            <button><Link to={'/student/creat'} >Thêm sinh viên</Link></button>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Detail</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList && studentList.map((students, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{students.name}</td>
                            <td>{students.phone}</td>
                            <td>{students.email}</td>
                            <td><Link to={'/student/detail/' + students.id} className={'btn btn-secondary btn-sm'}>Detail</Link></td>
                            <td><Button variant="primary" onClick={handleShow}>
                                Delete
                            </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa </Modal.Body>
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