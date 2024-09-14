import React,{useState} from 'react';
import axios from 'axios';


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
    <div className='col-md-10'>
        
    <div className="App">
      <br />
      <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            name="dateattn"
            value={data.dateattn}
            onChange={(e) =>
              setData({...data, dateattn: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label>SUC</label>
          <input
            type="text"
            name="suc"
            value={data.suc}
            onChange={(e) =>
              setData({...data, suc: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
        </div>
        
      </form>
</div>
</div>
);
}