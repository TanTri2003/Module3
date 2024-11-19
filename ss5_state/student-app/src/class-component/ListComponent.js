import React from 'react';
import { getAllStudent } from '../service/studentService';
import AddComponent from './AddComponent';
import DeleteComponent from './DeleteComponent';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListComponent extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            studentList: [],
            isAddSuccess: false,
        }
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleReload = this.handleReload.bind(this);
    }
    componentDidMount(){
        this.setState((preState)=>({
            ...preState,
            studentList:[...getAllStudent()]
        }))
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isReload !== this.state.isReload) {
            this.setState((preState) => ({
                ...preState,
                studentList: [...getAllStudent()]
            }))
        }
    }
    handleReload() {
        this.setState((pre) => ({
            ...pre,
            isReload: !pre.isReload,
        }))
    }
    handleAddSuccess() {
        this.setState((pre) => ({
            ...pre,
            isAddSuccess: true,
        }))
    }
    handleShowModal(students) {
        this.setState((preState) => (
            {
                ...preState,
                isShowModal: !preState.isShowModal,
                deleteCustomer : {
                    ...students
                }
            }
        ))
    }

    render(){
        return(
            <>
            <AddComponent handleReload={this.handleReload.bind(this)}/>
            <br/>
               <table class="table table-dark table-striped">
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Phone</th>
                           <th>Email</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.studentList.map((students, i) => (
                           <tr key={students.email}>
                               <td>{students.name}</td>
                               <td>{students.phone}</td>
                               <td>{students.email}</td>
                               <td>
                                   <button>Edit</button>
                                   <button  onClick={()=>{
                                    this.handleShowModal(students)
                                }} className={'btn btn-sm btn-danger'}>Delete</button>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
               <DeleteComponent handleReload = {this.handleReload} deleteCustomer ={this.state.deleteCustomer} handleShowModal={this.handleShowModal} isShowModal={this.state.isShowModal}/>
           </>
        )
    }
}
export default ListComponent;