import React, { useState } from "react"
import axios from 'axios'
import "./register.css"
import { useNavigate } from 'react-router-dom';

const Register = () => {


    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        phone:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;
        // console.log(e.target.value);
        setUser({...user,[name]: value})
    }

    const register  = ()=>{
        const{name,phone,password,reEnterPassword} =  user
        if( name && phone && password && (password === reEnterPassword)){
            axios.post("http://localhost:5000/register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="register">

<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="PhoneImage"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
        <div class="form-outline mb-4">
            <input type="text" name="name" value={user.name}  placeholder="Your Name" onChange={handleChange} id="form1Example13" class="form-control form-control-lg" />
            {/* <label class="form-label" for="form1Example13">Phone Number</label> */}
          </div>
         
          <div class="form-outline mb-4">
            <input type="number" name="phone" value={user.phone}  placeholder="Enter your Phone Number" onChange={handleChange} id="form1Example13" class="form-control form-control-lg" />
            {/* <label class="form-label" for="form1Example13">Phone Number</label> */}
          </div>

          
          <div class="form-outline mb-4">
            <input type="password" name="password" value  = {user.password} placeholder="Enter your Password" onChange={handleChange} id="form1Example23" class="form-control form-control-lg" />
            {/* <label class="form-label" for="form1Example23">Password</label> */}
          </div>
          <div class="form-outline mb-4">
            <input           type="password" name="reEnterPassword" value={user.reEnterPassword}  placeholder="Re-enter Password" onChange={handleChange}
id="form1Example23" class="form-control form-control-lg" />
            {/* <label class="form-label" for="form1Example23">Password</label> */}
          </div>
          

          
          <button type="submit" class="btn btn-primary btn-lg btn-block w-100" onClick={register}>Register</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block w-100" onClick={()=>navigate("/login")}>Login</button>
          

        </form>
      </div>
    </div>
  </div>
</section>


        {/* {console.log(user)} */}
            {/* <h1>Register</h1> */}
            {/* <input type="text" name="name" value={user.name}  placeholder="Your Name" onChange={handleChange} ></input>
            <input type="number" name="phone" value={user.phone}  placeholder="Your Phone Number" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.password}  placeholder="Your Password" onChange={handleChange} ></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword}  placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div> */}
        </div>
    )
}

export default Register;