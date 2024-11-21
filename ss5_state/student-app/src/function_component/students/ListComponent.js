import React, { useEffect, useState } from "react";
import { getAllStudent } from "../../service/studentService";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddComponent from "./AddComponent";

const ListComponent = ()=>{
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setStudentList((pre)=>([
            ...getAllStudent()
        ]))
    },[isLoading])
    const handleIsLoading = ()=>{
        setIsLoading((prevState) => !prevState)
    }
    return(
        <>
        <AddComponent handleIsLoading={handleIsLoading}/>
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
                   {studentList&&studentList.map((students, i) => (
                       <tr key={students.email}>
                           <td>{students.name}</td>
                           <td>{students.phone}</td>
                           <td>{students.email}</td>
                           <td>
                               <button className={'btn btn-sm btn-danger'}>Edit</button>
                               <button className={'btn btn-sm btn-danger'}>Delete</button>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
       </>
    )
}
export default ListComponent;