import React, { useState , useCallback } from 'react';
// import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const[input ,setInput] = useState("");
    const navigate = useNavigate();
    const handlejoin = useCallback(() => {
        navigate(`/room/${input}`);
    },[navigate,input]);

  return (
    <div className='container'>
        <input 
        type='number' 
        value={input} 
        onChange={(e)=>setInput(e.target.value)} 
        placeholder='Enter your Room Number'
        className='input'></input>
        <button 
        onClick={handlejoin}
        className='button'
        >Join the VideoCall</button>
    </div>
  )
}

export default Home