import { useState } from "react";
function counter(){
  const [count,setCount]=useState(0);
    return (
        <>
       < button onClick={ increment}>increment</button>
       <h1>{count}</h1></>
    )
    function increment(){
        setCount(count+1);
        console.log(count);
    }
}export default counter