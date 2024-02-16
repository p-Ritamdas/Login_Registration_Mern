import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = () => {

const[data,setData]=useState({
        email:"",
        password:""
    })
    
    const inputdata=(e)=>{
        
    setData({...data,[e.target.name]:e.target.value})
    
    }
const navigate= useNavigate();
    const submithandler=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5500/login',{email:data.email,password:data.password}).then((res)=> {
            if(res.data=="login success"){
                navigate("/Home")
            }
            else{
                console.log("error login");
                
            }
         
        })
        
    }

return (
    <>
    <h2>LOGIN</h2>
    <div>
        <form  onSubmit={submithandler} >
            
            <p>
                <label htmlFor="">EMAIL</label>
                <input type="text" name='email' value={data.message} onChange={inputdata} placeholder='Enter User Email' />
            </p>
            <p>
                <label htmlFor="">USER PASSWORD</label>
                <input type="text" name='password' value={data.password} onChange={inputdata} placeholder='Enter Password' />
            </p>
            
            <button  type='SUBMIT'>Login</button>
            
           
        </form>
        <button><Link to="/"> return</Link></button>

    </div>
</>
  )
}

export default Login