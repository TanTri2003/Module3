import React, { useEffect, useState,useRef } from 'react';
import HeaderComponent from '../header/HeaderComponent';
import { getAllCustom, searchCustomByName } from '../../service/customService';
import "../../css/ListCardComponent.css"
import SearchFunction from '../function/SearchFunction';
function ListCardComponent() {
    const [customList, setCustomList] = useState([]);
    const searchRef = useRef()
    useEffect(() => {
        const fetchData = async () => {
            const listCustom = await getAllCustom();
            setCustomList(listCustom);
        }
        fetchData()
    }, [])
    return (
        <>
        <SearchFunction setCustomList={setCustomList}/>
            <div className="card-container">
                {customList && customList.map((dichVu, i) => (
                    <div class="card">

                        <div key={i} className='card'>
                            <img src={dichVu.image} alt={dichVu.name} />
                            <div className="card-body">
                                <h5>{dichVu.name}</h5>
                                <p className='card-text'>
                                    <strong>Type: </strong>{dichVu.type.name}
                                    <strong>Area: </strong>{dichVu.area}
                                    <strong>Rental cost: </strong>{dichVu.rental_cost}
                                    <strong>People: </strong>{dichVu.people}
                                    <strong>Rental type: </strong>{dichVu.rental_type}
                                    <strong>Room standard: </strong>{dichVu.room_standard}
                                    <strong>Description: </strong>{dichVu.description}
                                    <strong>Floor: </strong>{dichVu.floor}
                                </p>
                                <button>Delete</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default ListCardComponent;