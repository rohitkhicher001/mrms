import React,{useState,useEffect} from "react"
import "./contactus.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";



const Contactus = () => {
    const navigate = useNavigate()
    
    const [ contact, setContact] = useState({
        
      
        name: "",
        phone: "",
        message: ""
        
      
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;
        // console.log(e.target.value);
        setContact({...contact,[name]: value})
    }
    const sendcontact = () => {
        axios.post("http://localhost:5000/addcontact", contact)
        .then(res => {
            alert(res.data.message)
            navigate("/myrecord")
        })
    }
    return (
        <div className="contactus">
        <Navbar/>
        
    
        <div class="registration-form">
        <form>
        <div class="form-group">
                <h3 className="mb-4">Contact Us</h3> 
            </div>
            <div class="form-group">
                <input type="text" name="name" value={contact.name}  placeholder="Name" onChange={handleChange} class="form-control item" id="name" />
            </div>
            <div class="form-group">
                <input type="text" name="phone" value={contact.phone}  placeholder="Phone number" onChange={handleChange} class="form-control item" id="phone" />
            </div>
            <div class="form-group">
                <input type="text" name="message" value={contact.message}  placeholder="Message" onChange={handleChange} class="form-control item" id="message"/>
            </div>
            
            <div class="form-group">
                <div class="btn btn-block create-account" onClick={sendcontact}>Send</div>
            </div>
        </form>
        
    </div>

        </div>
    )
}

export default Contactus