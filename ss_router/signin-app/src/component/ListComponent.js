import React, { useEffect, useState } from 'react'
import { getAllStudent } from '../service/employeesService';

function ListComponent() {
    const [employeesList, setEmployees] = useState([]);
    useEffect(() => {
        const listEmployees = getAllStudent();
        setEmployees(() => ((
            [
                ...listEmployees
            ]
        )))
    }, [])
    return (
        <>
            <h3>Danh sách Employees</h3>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesList && employeesList.map((employees, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{employees.name}</td>
                            <td>{employees.age}</td>
                            <td><button className="btn btn-primary active">Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ListComponent;