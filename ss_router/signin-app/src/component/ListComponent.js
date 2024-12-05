import React from 'react'
import { getAllStudent } from '../service/employeesService';
function ListComponent() {
    return (
        <>
            <h3>Danh sách Employees</h3>
            <table className="table table-dark table-striped">
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
                            <td>Detail</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ListComponent;