import React, { useEffect, useState } from 'react'
import HeaderComponent from '../header/HeaderComponent'
import { getAllCustom } from '../../service/customService';
import "../../css/ListComponent.css"
function ListComponent(){
    const [customList, setCustomList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const listCustom = await getAllCustom(); 
            setCustomList(listCustom);
        }
        fetchData()
    }, [])
    return(
        <>
        <HeaderComponent/>
        <table className="table table-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Diện Tích</th>
                        <th>Đơn Giá</th>
                        <th>People</th>
                        <th>Kiểu Thuê</th>
                        <th>Phòng</th>
                        <th>Nội Thất</th>
                        <th>Tầng</th>
                        <th>Hình Ảnh</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customList&&customList.map((dichVu,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{dichVu.type.name}</td>
                            <td>{dichVu.name}</td>
                            <td>{dichVu.area}</td>
                            <td>{dichVu.rental_cost}</td>
                            <td>{dichVu.people}</td>
                            <td>{dichVu.rental_type}</td>
                            <td>{dichVu.room_standard}</td>
                            <td>{dichVu.description}</td>
                            <td>{dichVu.floor}</td>
                            <td>
                                <img src={dichVu.image} alt={dichVu.name}  />
                            </td>
                            <td><button>Edit</button></td>
                            <td><button>Button</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ListComponent