import React, { useEffect, useRef, useState } from "react";
import { getAllStudent, searchByName } from "../../service/studentService";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal,setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({})
    const searchNameRef = useRef();
    useEffect(() => {
        setStudentList((pre) => ([
            ...getAllStudent()
        ]))
    }, [isLoading])
    const handleIsLoading = () => {
        setIsLoading((prevState) => !prevState)
    }
    const handleSearch = () => {
        let searchName = searchNameRef.current.value;
        const listSearch = searchByName(searchName);
        setStudentList(()=>[
            ...listSearch
        ])
    }
    const handleShowModal=(students)=>{
        setDeleteStudent(()=>({
            ...students
        }))
        setIsShowModal((prevState)=>!prevState)
    }
    const handleCloseModal=()=>{
        setIsShowModal(prevState => !prevState)
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
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList && studentList.map((students, i) => (
                        <tr key={students.email}>
                            <td>{students.name}</td>
                            <td>{students.phone}</td>
                            <td>{students.email}</td>
                            <td>
                                <button className={'btn btn-sm btn-danger'}>Edit</button>
                                <button onClick={()=>{
                                    handleShowModal(students)
                                }} className={'btn btn-sm btn-danger'}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteComponent handleIsLoading={handleIsLoading} handleShowModal={handleShowModal} handleCloseModal={handleCloseModal} deleteStudent = {deleteStudent} isShowModal={isShowModal}/>
        </>
    )
}
export default ListComponent;