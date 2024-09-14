import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Addstudent() {
    const [data, setData]=useState({name:"",suc:"",year:"",email:""});

  const handleInputChange=(event)=>{
    const{name, value}=event.target;
     setData((prevProps)=>({
      ...prevProps,[name]:value
     }));

     console.log(data)
    }
    const handleSubmit=(event)=>
      {

      event.preventDefault();

      console.log(data)
      axios.post('http://localhost:5000/api/adddata',data)
      .then((response) => {
            console.log(response.data)

            if(response.status==200)
            {
                alert('data inserted');
                setData({      //it is used null the set
                  name:"",
                  suc:"",
                  year:"",
                  email:""
                })
            }
            else{
                alert('failed');
            }
        });
      }
  return (
    <>

    <div className='col-md-10' style={{height:'700px',background:'aqua'}}> 
    <br/>
    
    <form onSubmit={handleSubmit}>
      <center>
     <fieldset >
        
     <div className='col' style={{color:'royalblue'}}><h3>...Student Details...</h3></div>
		  <label><strong>Name:</strong></label><br></br><input type='text' name='name' onChange={handleInputChange} />
      <br></br>
      <label><strong>Suc:</strong></label><br></br><input type='text' name='suc'onChange={handleInputChange}/>
      <br></br>
      <label><strong>Year:</strong></label><br/><input type='text' name='year'onChange={handleInputChange}/>
      <br></br>

      <label><strong>Email:</strong></label><br/><input type='text' name='email' onChange={handleInputChange}/>
      <br></br>
      <br></br>
      
      <strong><input type='submit'/></strong>
 
  </fieldset>
  </center>
  </form>
 
  </div>
 
   </>
   )
}