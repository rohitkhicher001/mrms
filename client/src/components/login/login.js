import React,{useState} from "react"
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        
        phone:"",
        password:""
      
    })

    const handleChange = (e)=>{

        const {name,value} = e.target;
        // console.log(e.target.value);
        setUser({...user,[name]: value})
    }
    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }
    return (
        <div className="login">

{/* new design */}

<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="PhoneImage"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
         
          <div class="form-outline mb-4">
            <input type="number" name="phone" value={user.phone}  placeholder="Enter your Phone Number" onChange={handleChange} id="form1Example13" class="form-control form-control-lg" />
            
          </div>

          
          <div class="form-outline mb-4">
            <input type="password" name="password" value  = {user.password} placeholder="Enter your Password" onChange={handleChange} id="form1Example23" class="form-control form-control-lg" />
          </div>

          

          
          <div  class="btn btn-primary btn-lg btn-block w-100" onClick={login}>Sign in</div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <div  class="btn btn-primary btn-lg btn-block w-100" onClick={()=>navigate("/register")}>Register</div>
          

        </form>
      </div>
    </div>
  </div>
</section>











{/* new design */}


        {/* {console.log(user)}
             <h1>Login</h1>
             <input type="number" name="phone" value={user.phone}  placeholder="Enter your Phone Number" onChange={handleChange}></input>
            <input type="password" name="password" value  = {user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div> */}
        </div>
    )
}

export default Login;