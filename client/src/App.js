import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from 'react';
import About from './components/about/about';
import Profile from './components/profile/profile';
import Myrecord from './components/myrecord/myrecord';
import Updateprofile from './components/updateprofile/updateprofile';
import Addrecord from './components/addrecord/addrecord';
import Document from './components/documents/document';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>}/>
           
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
            
    
      {/* <Route path="/" element={<Homepage />}/> */}

          <Route path="/register" element={<Register />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile />}/>
           <Route path="/myrecord" element={<Myrecord />}/>
           <Route path="/updateprofile" element={<Updateprofile />}/>
           <Route path="/addrecord" element={<Addrecord />}/>
           <Route path="/document" element={<Document />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
