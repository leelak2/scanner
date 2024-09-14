import React,{useState} from 'react';
import axios from 'axios';
import scanner2 from '../components/scanner2.jpg'
export default function Barscan() {
  const [data, setData] = useState({
    dateattn: "",
    suc: ""
  });

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const api = 'http://localhost:5000/api/addattn'
        axios.post(api,data).then((response) => {
            console.log(response.data)
            // // alert(response.status)
            // alert(response.data.message)
            if(response.status==200){
             alert("inserted")
             setData({
              suc: ""
             
            })
            }            
        })

        .catch(error => {
          console.log(error.response)

          if(error.response.status==401)
          {
            alert(error.response.data.message)
          }
          else{
            alert(error)
          }
        });
  };

  return (
     
    <div className="col-md-10" style={{height:'800px',background:'violet'}}>
      <br />
      <fieldset class="wd">  
      <div className='sd' style={{color:'brown'}}> <center><legend><strong>...Barscan...</strong></legend> </center></div> 

      <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className="form-control" style={{background:'violet'}}>
          <strong><label>Date::</label></strong>
          <input
            type="date"
            name="dateattn"
            value={data.dateattn}
            onChange={(e) =>
              setData({...data, dateattn: e.target.value })
            }
          />
        </div>
        <div className="form-control" style={{background:'violet'}}>
        <strong><label>SUC::</label></strong>
          <input
            type="text"
            name="suc"
            value={data.suc}
            onChange={(e) =>
              setData({...data, suc: e.target.value })
            }
          />
        </div>
        <div className="form-control" style={{background:'violet'}}>
          <label></label>
          <strong><button type="submit">Submit</button></strong>
          <br></br><br></br>
         <center> <img src={scanner2} style={{height:'500px',width:'800px'}}></img></center>
        </div>
        </div>
      </form>
      </fieldset>
 </div>
 
);
}