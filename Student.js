import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function StudentsList() {

    const[students, setStudents]=useState([{}])
    // const [images,seImages]=useState(Array)

   useEffect(()=>{
      axios.get('http://localhost:5000/api/getTrainees')
      .then(res => setStudents(res.data.students))
   },[])

//    console.log(products)


const handleDelete=(_id)=>{


    const api = 'http://localhost:5000/api/delete_student/'+_id
    axios.delete(api).then((response) => {
        console.log(response.data)
        if(response.status==200){
            alert("Deleted successfully.")
            window.location.href='/list';
        }            
    });       


}


  return (
    <>
    <div className='col-md-10'style={{height:'800px',background:'skyblue',float:'right'}}>
     <div className='id' style={{color:'orange'}} > <center><h1>...Student Reports...</h1></center></div>

    <table align="center" border={1} width={600} className='table table-bordered'>
    <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>roll</th>
                <th>Email</th>
             
            </tr>
       {
          students.map((e,i)=>{
           return(
            <>
              <tr>
              <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.roll}</td>
                <td>{e.email}</td>
               <td>
              <Link to={`/editstudent/${e._id}`}><button className="btn btn-warning">Edit</button></Link>
                <button className='btn btn-danger' onClick={()=>handleDelete(e._id)} >Delete</button>

              </td> 
            
              </tr>
      
            
            </>


           )

          })
       }
       </table>
    </div>
</>
)
}