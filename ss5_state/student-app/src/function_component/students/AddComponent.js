import React, { useState } from "react";
import { addNewCustomer, getAllStudent } from "../../service/studentService";

function AddComponent({handleIsLoading}){
    const [student, setStudent] = useState({})
    const handleOnChange =(event)=>{
        setStudent(prevState =>({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    const handleSave=()=>{
        addNewCustomer(student);
        console.log(getAllStudent());
        handleIsLoading();
    }
    return(
        <>
            <h2>Add Students</h2>
            <form>
                Name:
                <input name={'name'} onChange={(event)=>{
                    handleOnChange(event);
                }}/>
                Phone:
                <input name={'phone'} onChange={(event)=>{
                    handleOnChange(event);
                }}/>
                Email:
                <input name={'email'}onChange={(event)=>{
                    handleOnChange(event);
                }}/>
                <button onClick={handleSave} type="button">Save</button>
            </form>
        </>
    )
}
export default AddComponent;