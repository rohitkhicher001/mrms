import React,{useState} from "react"
import "./updateprofile.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";

const Updateprofile = () => {
    const navigate = useNavigate()

    const [ profile, setProfile] = useState({
        
        name: "",
        dateofbirth: "",
        phone: "",
        doses: "",
        married: "",
        kids: "",
        kidsage: "",
        familyvaccinated: "",
        kidspolio: "",
        kidstetanus: "",
        kidschickenpox: "",
        kidstb: "",
      kidspneumonia: "",
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;
        // console.log(e.target.value);
        setProfile({...profile,[name]: value})
    }
    const updateprofile = () => {
        axios.post("http://localhost:5000/updateprofile", profile)
        .then(res => {
            alert(res.data.message)
            navigate("/profile")
        })
    }
    return (
        <div className="updateprofile">
        <Navbar/>


          {/* new design */}
          <div class="registration-form">
        <form>
            
            <div class="form-group">
                <input type="text" name="name" value={profile.name}  placeholder="Enter your Name" onChange={handleChange} class="form-control item"  />
            </div>
            <div class="form-group">
                <input type="text" name="dateofbirth" value={profile.dateofbirth}  placeholder="Enter your Date-of-birth (DDMMYYYY)" onChange={handleChange} class="form-control item"  />
            </div>
            <div class="form-group">
                <input type="text" name="phone" value={profile.phone}  placeholder="Enter your Phone Number" onChange={handleChange} class="form-control item" />
            </div>
            {/* new data */}
         <div class="form-group">
                <input type="text" name="doses" value={profile.doses}  placeholder="No. of covid doses taken" onChange={handleChange} class="form-control item" />
            </div>
            
            <div class="form-group">
                <input type="text" name="married" value={profile.married}  placeholder="Married (YES/NO)" onChange={handleChange} class="form-control item" />
            </div>
             <div class="form-group">
                <input type="text" name="kids" value={profile.kids}  placeholder="No. of kids (0 if none)" onChange={handleChange} class="form-control item" />
            </div> <div class="form-group">
                <input type="text" name="kidsage" value={profile.kidsage}  placeholder="Age of kids (Ex: If 3 kids: 3 4 16)" onChange={handleChange} class="form-control item" />
            </div>
            
            
             <div class="form-group">
                <input type="text" name="familyvaccinated" value={profile.familyvaccinated}  placeholder="Family fully vaccinated for covid ? (YES/NO)" onChange={handleChange} class="form-control item" />
            </div>
            <div class="form-group">
                <input type="text" name="kidspolio" value={profile.kidspolio}  placeholder="All kids polio vaccinated? (YES/NO)" onChange={handleChange} class="form-control item" />
            </div>
            <div class="form-group">
                <input type="text" name="kidstetanus" value={profile.kidstetanus}  placeholder="All kids Tetanus vaccinated? (YES/NO)" onChange={handleChange} class="form-control item" />
            </div>
            <div class="form-group">
                <input type="text" name="kidschickenpox" value={profile.kidschickenpox}  placeholder="All kids Chickenpox vaccinated? (YES/NO)" onChange={handleChange} class="form-control item" />
            </div>
            <div class="form-group">
                <input type="text" name="kidstb" value={profile.kidstb}  placeholder="All kids Tuberculosis vaccinated? (YES/NO)" onChange={handleChange} class="form-control item" />
            </div>
            <div class="form-group">
                <input type="text" name="kidspneumonia" value={profile.kidspneumonia}  placeholder="All kids Pneumonia vaccinated? (YES/NO)" onChange={handleChange} class="form-control item" />
            </div>
            {/* new data */}
            <div class="form-group">
                <div class="btn btn-block create-account"  onClick={updateprofile}>Update Profile</div>
            </div>
        </form>
        
    </div>



          {/* new design */}

          
        </div>
    )
}

export default Updateprofile