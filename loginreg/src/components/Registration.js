import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';



const Registration = () => {


    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    
    const inputdata=(e)=>{
    
    setData({...data,[e.target.name]:e.target.value})
    
    }

    const submitdata=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5500/register',{name:data.name,email:data.email,password:data.password}).then((res)=> {
            console.log("reg successfull")
          console.log(res.data)  
        })
        
    }


    return (
        <>
            <h2>REGISTRATION</h2>
            <div>
                <form onSubmit={submitdata}>
                    <p>
                        <label htmlFor="">USER NAME</label>
                        <input type="text" name='name' value={data.name} onChange={inputdata} placeholder='Enter UserName' />
                    </p>
                    <p>
                        <label htmlFor="">EMAIL</label>
                        <input type="text" name='email' value={data.message} onChange={inputdata} placeholder='Enter User Email' />
                    </p>
                    <p>
                        <label htmlFor="">USER PASSWORD</label>
                        <input type="text" name='password' value={data.password} onChange={inputdata} placeholder='Enter Password' />
                    </p>
                    
                    <button >SignUp</button>
                    
                </form>

                <h5>Already have an Account??</h5>
                     <button><Link to="/Login">login</Link></button>

            </div>
        </>
    )
}

export default Registration