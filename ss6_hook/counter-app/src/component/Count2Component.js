import React,{useIncrement} from 'react'
function Count2(){
    const [count, setCount] = useIncrement(0,1);
    return(
        <div>
            <h2>Count: 1 {count}</h2>
            <button onClick={setCount}>Add 2</button>
        </div>
    )
}
export default Count2;