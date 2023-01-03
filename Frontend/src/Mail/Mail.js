import "./Mail.css";
import { useState } from "react";
import axios from 'axios'
function Mail() {
    const [state,setstate]=useState({
        email:'',
        subject:'',
        description:''
    })
    const [msg,setMsg]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.post('https://mail-sender-01jl.onrender.com/mail',state)
    .then((res)=>setMsg(res.data.message))
    setstate({
      email:"",
      subject:"",
      description:""
    })
  }
    
  return (
    <div className="main">
      <div className="contact-box">
        <div>
          <h1 id="heading">Email sender</h1>
        </div>
        <div className="inputfield">
          <div className="input">
            <label>To</label>
            <input type="text" placeholder="Email" value={state.email} name="email" onChange={(e)=>setstate({...state,[e.target.name]:e.target.value})}></input>
          </div>
          <div className="input">
            <label>Subject</label>
            <input type="text" placeholder="Subject" value={state.subject} name="subject" onChange={(e)=>setstate({...state,[e.target.name]:e.target.value})}></input>
          </div>
          <div className="input">
            <label>Description</label>
            <textarea type="text" placeholder="Description" value={state.description} name="description" onChange={(e)=>setstate({...state,[e.target.name]:e.target.value})}></textarea>
          </div>
          <div className="input1"><button id="btn" onClick={handleSubmit}>Send</button></div>
        </div>
        {msg && <div id="msg">{msg}</div>}
      </div>
    </div>
  );
}

export default Mail;
