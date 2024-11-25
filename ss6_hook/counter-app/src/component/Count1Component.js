import React from 'react'
import useIncrement from './AddCountComponent';
function Count1() {
    const [count, increase] = useIncrement(1);
    return (
        <>
            <div>
                <h2>Count: {count} </h2>
                <button onClick={increase} >Add 1</button>
            </div>
        </>

    )
}
export default Count1;