import React, { useCallback, useEffect, useRef, useState } from "react";
import { getAllStudent, searchByName } from "../../service/studentService";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({});
    const [editStudent, setEditStudent] = useState({});
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const searchNameRef = useRef();
    useEffect(() => {
        setStudentList((pre) => ([
            ...getAllStudent()
        ]))
    }, [isLoading])

    const handleIsLoading = useCallback(() => {
        setIsLoading((prevState) => !prevState)
    }, [])

    const handleSearch = () => {
        let searchName = searchNameRef.current.value;
        const listSearch = searchByName(searchName);
        setStudentList(() => [
            ...listSearch
        ])
    }

    const handleShowModal = (students) => {
        setDeleteStudent(() => ({
            ...students
        }))
        setIsShowModal((prevState) => !prevState)
    }
    const handleShowModalEdit = (students) => {
        setEditStudent(()=>({
            ...students
        }))
        setIsShowModalEdit((prevState) => !prevState)
    }

    const handleCloseModal = () => {
        setIsShowModal(prevState => !prevState)
    }
    const handleCloseModalEdit = () => {
        setIsShowModalEdit(prevState => !prevState)
    }
    return (
        <>
            <AddComponent handleIsLoading={handleIsLoading} />
            <form>
                <input ref={searchNameRef} placeholder="Enter Name"></input>
                <button type="button" onClick={handleSearch}>Search</button>
            </form>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList && studentList.map((students, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{students.name}</td>
                            <td>{students.phone}</td>
                            <td>{students.email}</td>
                            <td>
                                <button onClick={() => {
                                    handleShowModalEdit(students)
                                }} className={'btn btn-sm btn-danger'}>Edit</button>
                                <button onClick={() => {
                                    handleShowModal(students)
                                }} className={'btn btn-sm btn-danger'}>Delete</button>
                                <button onClick={() => {
                                    handleShowModal(students)
                                }} className={'btn btn-sm btn-danger'}>Deteil</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <DeleteComponent handleIsLoading={handleIsLoading} handleShowModal={handleShowModal} handleCloseModal={handleCloseModal} deleteStudent={deleteStudent} isShowModal={isShowModal} />
            <EditComponent isShowModalEdit={isShowModalEdit} editStudent={editStudent} handleCloseModalEdit={handleCloseModalEdit}/>
        </>
    )
}
export default ListComponent;