import React from 'react'
import HeaderComponent from '../header/HeaderComponent'
import "../../css/HomeComponent.css"
import logo from '../../image/logo.jpg'
import ListCardComponent from '../manager/ListCardComponent'
function HomeComponent() {
    return (
        <>
                <HeaderComponent />
                <img style={{height:"450px"}} src={logo} className='img-logo' />
                <ListCardComponent />
        </>
    )
}
export default HomeComponent