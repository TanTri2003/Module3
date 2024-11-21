import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Count1 from './component/Count1Component';
import Count2 from './component/Count2Component';
function useIncrement() {
  const [count, setCount] = useState(0)
  function increase() {
    setCount(prevCount => prevCount + addAmount);
  }

  return [count, increase];
}

export default useIncrement;
