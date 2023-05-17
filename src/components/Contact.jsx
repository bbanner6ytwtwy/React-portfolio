import React, { useState } from 'react';
import axios from 'axios';
import {Fade} from "react-reveal"
function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: ''
  });
   const [validation, setValidation] = useState("");
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://formspree.io/f/xqkojyep', formData)
      .then((response) => {
        console.log(response.data);
        setValidation("Successfully sent")
        setTimeout(()=>{setValidation("")}, 5000)
      })
      .catch((error) => {
        console.log(error);
        setValidation("Failed to send, Try again.")
        setTimeout(()=>{setValidation("")}, 5000)
      });
      setFormData({
        fname: '',
        lname: '',
        email: '',
        message: ''
      })
  };

  return (
      <div className="w-100 h-3/4 p-3 bg-light" >
            <p className="p-1 mb-3 text-center font-headthree general-font text-zinc-50 bg-stone-500 rounded-5">{validation}</p>
            <Fade duration={1000}>
                        <form   className="font-mono text-center py-10 rounded-5 bg-stone-950" onSubmit={handleSubmit}>
                <h1 className="font-head general-font pb-4" style={{"fontFamily":"Anton"}}>CONTACT ME</h1>
                <input  className="font-mono w-5/12 font-headfour outline-4 outline-stone-500 caret-stone-700 pl-4 text-stone-950 rounded-5 h-20 mb-4" type="text" id="name" name="fname" autoComplete="off" value={formData.fname}  onChange={handleChange} placeholder="First-Name" /> 
                <input  className="font-mono w-4/12 text-stone-950 outline-4 outline-stone-500 caret-stone-700 rounded-5 h-20 mb-4 font-headfour pl-4" type="text" id="name" name="lname" autoComplete="off" value={formData.lname} onChange={handleChange} placeholder="Last-Name" /> <br/>
                <input  className="font-mono w-75 font-headfour outline-4 outline-stone-500 caret-stone-700 pl-4 text-stone-950 caret-emerald-950 rounded-5 h-20 mb-4" type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} /><br/>
            <textarea  className="font-mono w-75 leading-tight outline-4 outline-stone-500 caret-stone-700 font-headfour pl-4 text-stone-950 rounded-5 h-44 pt-2 resize-none" autoComplete="off" placeholder="Compose Message Here For Me..." id="message" name="message" value={formData.message} onChange={handleChange}></textarea><br/>
                <button className="mt-4 font-headthree btn btn-xl bg-stone-800 text-zinc-300 p-3 rounded-5 hover:bg-zinc-50 hover:text-stone-950" type="submit">Contact me<i className="fa-regular fa-envelope fa-bounce pl-2"></i></button>
                </form>
            </Fade>
      </div>
  );
}

export default Contact
