import { Form } from "react-router-dom";
import React, { useRef } from 'react'
function LoginComponent(){
    const  usernameRef = useRef();
    const  passwordRef = useRef();
    const handleLogin=()=>{
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        const loginInfo={
            username:username,
            password:password
        }
    }
    return(
        <Form>
            <h3>Login</h3>
            <div>
                <label>UserName</label>
                <input ref={usernameRef} name={'username'}/>
            </div>
            <div>
                <label>PassWord</label>
                <input ref={passwordRef} name={'password'}/>
            </div>
            <div>
                <button onClick={handleLogin}></button>
            </div>
        </Form>
    )
}
export default LoginComponent;