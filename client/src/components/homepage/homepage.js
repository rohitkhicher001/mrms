import React from "react"
import "./homepage.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Mainpage from "../api/mainpage";
import Navbar from "../navbar/navbar";

const Homepage = ({setLoginUser}) => {

    const navigate = useNavigate()

    return (
        <div className="homepage">
        <Navbar/>
          {/* <div  className = "nav">

            <div className="button"  onClick={()=>navigate("/")}>Home</div>
            <div className="button"  onClick={()=>navigate("/about")}>About</div>
            <div className="button"  onClick={()=>navigate("/profile")}>Profile</div>
            <div className="button"  onClick={()=>navigate("/myrecord")}>My Record</div>
          </div> */}
<div className="news">
            <Mainpage/>
</div>
<button class="button-67"  onClick={() => setLoginUser({})}>Logout</button>
           
        </div>
    )
}

export default Homepage