import React, { useState } from "react";

const Contact = () => {

  const [name,setName]=useState("Subhan");
  const [email,setEmail]=useState("mohdsubhan2764@gmail.com")

  return (
    <>
      <div className="contact">
        <form action="">
          <input 
          type="text" 
          placeholder=" Enter Your Name"
          onChange={(e)=> setName(e.target.value)}
          value={name}
           />
          <input type="email" 
          placeholder=" Enter Your Email"
           onChange={(e)=> setEmail(e.target.value)}
           value={email} />
          <button onClick={()=>alert("submited...")}>Submit</button>
        </form>
        <div className="details">
          <h3>Details Entered above</h3>
         <p> Name : {name}</p>
         <p> Email : {email}</p>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
