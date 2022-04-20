import React,{useState,useEffect} from "react"
import "./addrecord.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";

const Addrecord = () => {
    const navigate = useNavigate()
    const [ record, setRecord] = useState({
        
      
        nameofdisease: "",
        description: "",
        date: "",
        duration: "",
        hospital: "",
        prescription: "",
        anyeffects: ""
        
      
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;
        // console.log(e.target.value);
        setRecord({...record,[name]: value})
    }
    const addrecord = () => {
        axios.post("http://localhost:5000/addrecord", record)
        .then(res => {
            alert(res.data.message)
            navigate("/myrecord")
        })
    }
    return (
        <div className="addrecord">
        <Navbar/>
{/* new design */}
<div class="registration-form">
        <form>
            
            <div class="form-group">
                <input type="text" name="nameofdisease" value={record.nameofdisease}  placeholder="Name of disease/injury (Ex: Knee surgery/kidney stone)" onChange={handleChange} class="form-control item" id="username" />
            </div>
            <div class="form-group">
                <input type="text" name="description" value={record.description}  placeholder="Description" onChange={handleChange} class="form-control item" id="password" />
            </div>
            <div class="form-group">
                <input type="text" name="date" value={record.date}  placeholder="Date of first checkup" onChange={handleChange} class="form-control item" id="email"/>
            </div>
            <div class="form-group">
                <input type="text" name="duration" value={record.duration}  placeholder="Duration of treatment (In Months)" onChange={handleChange} class="form-control item" id="phone-number"/>
            </div>
            <div class="form-group">
                <input type="text" name="hospital" value={record.hospital}  placeholder="Hospital name" onChange={handleChange} class="form-control item" id="birth-date" />
            </div>
            <div class="form-group">
                <input type="text" name="prescription" value={record.prescription}  placeholder="Medicines/presciptions taken" onChange={handleChange} class="form-control item" id="birth-date" />
            </div>
            <div class="form-group">
                <input type="text" name="anyeffects" value={record.anyeffects}  placeholder="side effects" onChange={handleChange} class="form-control item" id="birth-date" />
            </div>
            <div class="form-group">
                <div class="btn btn-block create-account" onClick={addrecord}>Add Record</div>
            </div>
        </form>
        
    </div>
    






{/* new design */}

          {/* <div className="form">

          <input type="text" name="nameofdisease" value={record.nameofdisease}  placeholder="Name of disease/injury (Ex: Knee surgery/kidney stone)" onChange={handleChange}></input>
          <input type="text" name="description" value={record.description}  placeholder="Description" onChange={handleChange}></input>

          <input type="text" name="date" value={record.date}  placeholder="Date of first checkup" onChange={handleChange}></input>
          <input type="text" name="duration" value={record.duration}  placeholder="Duration of treatment (In Months)" onChange={handleChange}></input>
          <input type="text" name="hospital" value={record.hospital}  placeholder="Hospital name" onChange={handleChange}></input>
          <input type="text" name="prescription" value={record.prescription}  placeholder="Medicines/presciptions taken" onChange={handleChange}></input>
          <input type="text" name="anyeffects" value={record.anyeffects}  placeholder="side effects" onChange={handleChange}></input>

          </div>


          <div className="button-67" onClick={addrecord} >Add record</div> */}
        </div>
    )
}

export default Addrecord