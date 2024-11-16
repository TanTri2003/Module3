import React from "react";
import { addNewCustomer, getAllCustomer } from "../service/customerService";


class AddComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            customer :{
                name: "",
                phone:"",
                email:""
            }
        }
        this.handleSave= this.handleSave.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleSave(){
        addNewCustomer(this.state.customer);
        this.props.handleAddSuccess();

    }
    handleOnChange(event){
        this.setState((preState)=>({
            ...preState,
            customer:{
                ...preState.customer,
                [event.target.name]: event.target.value,
            }

        }))

    }

    render() {
        return (
            <>
                <h2>Add Student</h2>
                <form>
                    Name:
                    <input name={'name'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/><br></br>
                    Phone:
                    <input name={'phone'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/><br></br>
                    Email:
                    <input name={'email'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/><br></br>
                    <button className={'btn btn-sm btn-primary'} onClick={this.handleSave} type="button">Save</button>
                </form>
            </>

        );
    }
}
export default AddComponent ;