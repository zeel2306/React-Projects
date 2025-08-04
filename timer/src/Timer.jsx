import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[time,settime]=useState(0);
 
    useEffect(()=>{
        const timer= setInterval(()=>settime(time+1),1000);
        return function(){
            clearInterval(timer);
        }
    },[time]);
    
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Current time is {time} in sec</p>
    </div>
  )
}

export default Timer
