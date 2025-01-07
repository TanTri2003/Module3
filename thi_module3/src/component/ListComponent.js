import React, { useEffect, useState } from 'react'
import { deleteProductById, getAllProduct } from '../service/productService';
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';
function ListComponent() {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [deleteProducts, setDeleteProducts] = useState({ id: "", name: "" })
    useEffect(() => {
        const fetchData = async () => {
            const listCustom = await getAllProduct();
            setProductList(listCustom);
        }
        fetchData()
    }, [isLoading])
    const handleClose = () => {
        setShow((pre) => !pre)
    }
    const handleShow = (products) => {
        setShow((pre) => !pre)
        setDeleteProducts(products)
    }
    const handleDelete = () => {
        deleteProductById(deleteProducts.id)
        setIsLoading(pre => !pre);
        handleClose()
    }
    return (
        <>
            <h2>Danh sách sản phẩm</h2>
            <button style={{ borderRadius: "5px", backgroundColor: "rgb(63, 221, 31)", border: "none" }}>
                <Link to={"/creat"}>Thêm mới</Link></button>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productList && productList.map((products, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td><Link to={"/detail/" + products.id}>{products.title}</Link></td>
                            <td>{products.description}</td>
                            <td>{products.price}</td>
                            <td>< Link className={'btn btn-primary btn-sm'} to={"/edit/"+products.id}>Edit</Link></td>
                            <td><Button className={'btn-sm btn-danger'} variant="danger" onClick={() => {
                                handleShow(products);
                            }}>
                                Delete
                            </Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn chắc chắn muốn xóa sản phẩm {deleteProducts.name} này</Modal.Body>
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