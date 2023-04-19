import React from 'react'
import logo from './Google__G__Logo.svg.png'
import './input.css'


const inputer = ({input, setInput,findweather}) => {
    const handlechange = (event)=> {
        setInput(event.target.value)
    }
    console.log(input);

const handleclick = (event)=> {
    event.preventDefault();
    findweather();
};
  return (
    <div className='wrapper'>
        <div className='container'>
            <h1>Google Weather App</h1>
            <span>Powered by</span>
            <br/>
            <img className='logo' src={logo} alt='Logo'></img>
            <br/>
            <form>
            <input placeholder='Enter your city name' onChange={handlechange} value={input}/>
            <br/>
            <button variant="solid" type='submit' onClick={handleclick}>Search</button>
            </form>
        </div>
    </div>
  )
}

export default inputer