import React,{useState} from 'react'

function useIncrement(addAmount){
    const [count, setCount] = useState(0);
    function increase() {
        setCount((prevCount) => prevCount + addAmount);// giá trị mới bằng giá trị cũ + addAmount
      }
    
      return [count, increase];
}
export default useIncrement;