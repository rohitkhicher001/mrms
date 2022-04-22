import React,{useState,useEffect} from "react"
import "./profile.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";

const Profile = () => {
    const navigate = useNavigate()
    const [profiledata,setProfiledata] = useState(null);

useEffect(()=>{
    async function getProfile(){
      axios.get("http://localhost:5000/profile")
      .then((res)=>{
        const arr = res.data;
        const reqdata = arr[arr.length-1];
        // console.log(reqdata);
        setProfiledata(reqdata);
        console.log(profiledata);
      })
    }
    getProfile();
  });
  
  return (
    <div className="prof">
        <Navbar/>
      
        
            {/* New design */}



            <div class="container d-flex justify-content-center align-items-center">
    <div class="cards">
        <div class="upper"> <img alt="backgroundImage" src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"/> </div>
        {/* <div class="user text-center">
            <div class="profile"> <img alt="Profileimage" src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"/> </div>
        </div> */}
        <div class="mt-5 text-center">
        <div className="btn btn-primary btn-sm follow lead" onClick={()=>navigate("/updateprofile")}>update profile</div>
            <div class=" justify-content-between align-items-center mt-4 px-4">
                <div class="d-flex justify-content-between align-items-center mt-4 px-4 stats">
                <h6 class="mb-0 txt">Name: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.name : <p class="pd"></p>}</h6>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">Date of Birth: </h6>

                    <h6 class="mb-0 txt">{profiledata ? profiledata.dateofbirth : <p></p>}</h6> 
                </div>
                <div class="d-flex justify-content-between align-items-center mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">Phone: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.phone : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between align-items-center mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">No. of covid doses taken: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.doses : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between align-items-center mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">Married: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.married : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between  mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">No. of kids: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.kids : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between  mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">Age of kids: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.kidsage : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between align-items-center mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">Family fully vaccinated for covid: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.familyvaccinated : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">All kids polio vaccinated: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.kidspolio : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">All kids Tetanus vaccinated: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.kidstetanus : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">All kids Chickenpox vaccinated: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.kidschickenpox : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">All kids Tuberculosis vaccinated: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.kidstb : <p></p>}</h6> 
                </div>

                <div class="d-flex justify-content-between mt-4 px-4 stats">
                
                <h6 class="mb-0 txt">All kids Pneumonia vaccinated: </h6>
                    <h6 class="mb-0 txt">{profiledata ? profiledata.kidspneumonia : <p></p>}</h6> 
                </div>
            </div>
        </div>
    </div>
</div>



            {/* New design */}
    
        
          {/* <div>Name: {profiledata ? profiledata.name : <p>Name</p>}</div>
          <div>Date of birth: {profiledata ? profiledata.dateofbirth : <p>Date of Birth</p>}</div>
          <div>Phone: {profiledata ? profiledata.phone : <p>Phone</p>}</div> */}


          {/* <div className="btn btn-primary btn-sm follow" onClick={()=>navigate("/updateprofile")}>update profile</div> */}
        </div>
    )
}

export default Profile