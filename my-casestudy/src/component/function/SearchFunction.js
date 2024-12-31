import React, { useRef, useState } from 'react'
import { searchCustomByName } from '../../service/customService';
function SearchFunction({ setCustomList }) {
    const searchRef = useRef()
    const handleSearch = () => {
        let searchName = searchRef.current.value;
        const fectchData = async () => {
            const list = await searchCustomByName(searchName)
            setCustomList(list)
        }
        fectchData()
    }
    return (
        <>
            <form style={{marginTop:"20px"}} class="d-flex" role="search">
                <input ref={searchRef} name={'searchName'} class="form-control me-2" placeholder="Search" />
                <button onClick={handleSearch} class="btn btn-outline-success" type={'button'}>Search</button>
            </form>
        </>
    )
}
export default SearchFunction;