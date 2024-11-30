import React from 'react'
import { editCustomerId } from '../../service/studentService';

function EditComponent({ isShowModalEdit,editStudent,handleCloseModalEdit,handleIsLoading }) {
    const handleEdit =()=>{
        editCustomerId(editStudent.name)
        handleIsLoading();
        handleCloseModalEdit();
    }
    return (
        isShowModalEdit && <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Student</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Name</label>
                                <input placeholder={editStudent.name} type="text" class="form-control" id="recipient-name"/>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Phone</label>
                                <input placeholder={editStudent.phone} type="text" class="form-control" id="recipient-name"/>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Email</label>
                                <input placeholder={editStudent.email} type="text" class="form-control" id="recipient-name"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleCloseModalEdit} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={handleEdit} type="button" className="btn btn-primary">Sever</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditComponent;