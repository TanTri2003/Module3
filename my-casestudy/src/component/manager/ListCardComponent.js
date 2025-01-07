import React, { useEffect, useState,useRef } from 'react';
import HeaderComponent from '../header/HeaderComponent';
import { deleteCustomById, getAllCustom} from '../../service/customService';
import "../../css/ListCardComponent.css"
import SearchFunction from '../function/SearchFunction';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
function ListCardComponent() {
    const [customList, setCustomList] = useState([]);
    const searchRef = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [deleteCustom, setDeleteCustom] = useState({ id: "", name: "" })
    useEffect(() => {
        const fetchData = async () => {
            const listCustom = await getAllCustom();
            setCustomList(listCustom);
        }
        fetchData()
    }, [isLoading])
    const handleClose = () => {
        setShow((pre) => !pre)
    }
    const handleShow = (dichVu) => {
        setShow((pre) => !pre)
        setDeleteCustom(dichVu)
    }
    const handleDelete = () => {
        deleteCustomById(deleteCustom.id)
        setIsLoading(pre => !pre);
        handleClose()
    }
    return (
        <>
        <SearchFunction setCustomList={setCustomList}/>
        <button ><Link style={{ color: 'white', textDecoration: 'none' }} to={'/home/add'}>add</Link></button>
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
                                    <strong>Rental type: </strong>{dichVu.rental_type}
                                    <strong>Description: </strong>{dichVu.description}
                                </p>
                                <Button className={'btn-sm btn-danger'} variant="danger" onClick={() => {
                                    handleShow(dichVu);
                                }}>
                                    Delete
                                </Button>
                                <Link to={'/home/edit/' +dichVu.id} className={'btn btn-primary btn-sm'}>Edit</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa {deleteCustom.name}</Modal.Body>
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

export default ListCardComponent;