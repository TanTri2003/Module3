import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/HeaderComponent.css'
import SearchFunction from '../function/SearchFunction'
function HeaderComponent() {
    return (
        <>
            <div className='header-container'>
                <div className="header-home">
                    <Link type="button" style={{ paddingLeft: "100px", width: "30%" }} to={'/home'}><h1 >Furama</h1></Link>
                    <h1 style={{ fontSize: "25px", width: "70%" }}>FURAMA DANANG PREMIER HAN RIVER</h1>
                </div>
                <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item ">
                                    <Link to={'/home/manager'} class="nav-link" href="#">Quản lý Khách sạn</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default HeaderComponent