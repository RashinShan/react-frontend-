
import React, { useState } from 'react';
import './formsubmitting.css';


function MyForm() {


  const [name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const handelSubmit=(event)=>{
    event.preventDefault();
    alert(`hello welcome  ${name} your email ${Email}`);
  }
        return (
        
          <form  onSubmit={handelSubmit}>
              <table>
              <tr><td> <label class="form" >Enter your User Name:</label></td>

            <td> 
              <input class="formelement"
              value={name} 
              onChange={(e)=> setName(e.target.value)}
              type="text" />
            </td></tr>

            <tr><td> <label class="form" >Enter your Email:</label> </td>

            <td>
              <input class="formelement"
              value={Email} 
              onChange={(e)=> setEmail(e.target.value)}
              type="text" />
            </td></tr>

            <tr><td> <input class="submitbtn" type="submit"/></td></tr>
          </table>
          </form>
        )
      }


 
export default MyForm;