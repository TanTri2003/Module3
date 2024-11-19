import React from 'react';
import { getAllCustomer } from '../service/customerService';
import AddComponent from './Addcomponent';
// em đổi tên file nhưng bị lỗi
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListComponent extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {
            customerList: [],
            isAddSuccess: false,
        }
        
    }
    componentDidMount() {
        this.setState((preState) => ({
            ...preState,
            customerList: [...getAllCustomer()]
        }));
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isAddSuccess !== this.state.isAddSuccess) {
            this.setState((preState) => ({
                ...preState,
                customerList: [...getAllCustomer()]
            }))
        }
    }
    handleAddSuccess() {
        this.setState((pre) => ({
            ...pre,
            isAddSuccess: true,
        }))
    }
    render() {
        return (
            <>
             <AddComponent handleAddSuccess={this.handleAddSuccess.bind(this)}/>
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
                        {this.state.customerList.map((e, i) => (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.phone}</td>
                                <td>{e.email}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListComponent;