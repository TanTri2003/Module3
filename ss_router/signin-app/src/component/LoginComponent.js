import React from 'react'
import '../css/LoginComponent.css'
import { Link} from "react-router-dom";
function LoginComponent() {
    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <Link type="submit" class="btn btn-primary" to={'/home'}>Login</Link>
            </form>
        </>
    )
}
export default LoginComponent;