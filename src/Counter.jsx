import React, { useState } from 'react';

function Counter() {

    const [count, setCount]=useState(0) ;
 
    const handleIncrement =()=>{
        setCount((prevCount)=>prevCount+1);
    } ;
    const handleDecrement =()=>{
        setCount((prevCount)=>prevCount-1);
    } ;




  return (
<div>
 <h1>Counter App</h1>
<h2>Count: {count}</h2>
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter
