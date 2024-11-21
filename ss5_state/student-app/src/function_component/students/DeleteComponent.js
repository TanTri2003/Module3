import React from "react";
import { deleteCustomerId } from "../../service/studentService";

function DeleteComponent(){
    const [student, setStudent] = useState({}) 
    const handleDelete=()=>{
        deleteCustomerId(setStudent.deleteCustomer.id);
        console.log(getAllStudent());
    }
    return(
        this.props.isShowModal&&<div className="modal show" tabIndex="-1" style={{display: 'block'}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Do you want to delete .{this.props.deleteCustomer.name}???</p>
                </div>
                <div className="modal-footer">
                    <button  onClick={this.props.handleShowModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button  onClick={this.handleDelete} type="button" className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    </div>
    )
}