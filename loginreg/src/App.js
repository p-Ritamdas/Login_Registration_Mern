import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Home from './components/Home';
import Login from './components/Login';
import {Routes,Route, BrowserRouter} from "react-router-dom"
function App() {
  return (
  <>

    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Registration/>}/>
            <Route path="/home" element={<Home/> }/>
    
         </Routes>
     </BrowserRouter>
    </div>


    </>
  );
}

export default App;
