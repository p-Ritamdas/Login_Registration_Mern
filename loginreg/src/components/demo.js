import react, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
function App() {
const[messagebox,setMessagebox]=useState([])


useEffect(()=>{
 const fetchdata=async()=>{
  await axios.get("http://localhost:4500/").then((res)=>{setMessagebox(res.data.mesage)})

} 
 fetchdata()
})

  const [data, setData] = useState({
    name: "",
    message: ""
  })

  const handleinput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4500/create', { name: data.name, message: data.message }).then((res) => console.log(res.data))

    setData({"name":"" , "message":""})
  }

const handleupdate = async(e)=>{
  
}
const handledelete = async(id)=>{
  await axios.post('http://localhost:4500/delete', {id}).then((res) => console.log(res.data))
  
}
handledelete();


  return (
<>
<div className="box">
    <div className="App">
      <form onSubmit={handlesubmit}>

        <div> 
          
          <label className="label" htmlFor="">name</label>
          <input className="input" type="text" name="name" value={data.name} onChange={handleinput} placeholder="enter your name" />
          <br />
          <label className="label"  htmlFor="">message</label>
          <input className="input"  type="text" name="message" value={data.message} onChange={handleinput} placeholder="enter message" />
        </div>

        <div><button type="submit"> submit</button></div>
      </form>

      
    </div>
    </div>
{/* show data section */}
<div className="App2">
  
      {messagebox.map((item)=><p>{item.name},{item.message}    
      <button onClick={()=>{handledelete(item._id)}}>delete</button>
      <button onClick={()=>{handleupdate(item.id,item.name,item.message)}}>update</button>
      </p>)}
</div>

<table>
<tr>{messagebox.map((items)=><td>{items.name}</td>)}
  
  
</tr>

</table>



</>

  );
}

export default App;


