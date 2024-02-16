import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <>
   <div >
<h1>WElCOME TO HOME PAGE</h1>
<button><Link to="/Login">Logout</Link></button>


   </div>
   
   </>
  )
}

export default Home