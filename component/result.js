import React from 'react'
import './result.css'

const result = ({temp,icon,desc,settemp}) => {
  return (
    <div className='reult'>
        <div className='result__box'>
            <h1>Temp: {temp}°C</h1>
            <p>{desc}</p>
            <img src={icon} alt="logo"/><br/>
            <button onClick={()=>{settemp("")}}>Back</button>
        </div>
    </div>
  )
}

export default result