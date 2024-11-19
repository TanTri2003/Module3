import React from "react";
import { addNewCustomer} from "../service/studentService";

class AddComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students :{
                name:"",
                phone:"",
                email:""
            }
        }
        this.handleSave= this.handleSave.bind(this);
    }
    handleSave(){
        addNewCustomer(this.state.students);
        this.props.handleReload();
    }
    handleOnChange(event){
        this.setState((preState)=>({
            ...preState,
            students:{
                ...preState.students,
                [event.target.name]: event.target.value,
            }
        }))
    }
    render(){
        return(
            <>
            <h2>Add Students</h2>
            <form>
                Name:
                <input name={'name'} onChange={(event)=>{
                    this.handleOnChange(event)
                }}/>
                Phone:
                <input name={'phone'} onChange={(event)=>{
                    this.handleOnChange(event)
                }}/>
                Email:
                <input name={'email'} onChange={(event)=>{
                    this.handleOnChange(event)
                }}/>
                <button onClick={this.handleSave} type="button">Save</button>
            </form>
        </>
        )
    }
}
export default AddComponent;