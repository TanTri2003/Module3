import React from 'react';
import './StudentInfoComponent.css';
const listStudent = [
    {
        id: 1,
        name: "Trí",
        age: 21,
        address: "Quảng Nam"
    },
    {
        id: 2,
        name: "Neverdie",
        age: 21,
        address: "Quảng Nam"
    }
]
export class StudentInfo extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudent.map((e, i) => (
                        <tr >
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}