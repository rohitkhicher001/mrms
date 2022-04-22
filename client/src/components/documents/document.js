import React,{ useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from './functions';
import "./document.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";

function Document() {
const navigate = useNavigate()
  const [item, setItem] = useState({ title: '', image: '' });
  const [items, setItems] = useState([])
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createItem(item);

    setItems([...items, result]);
    navigate("/profile")

  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      console.log('fetch data;m', result)
      setItems(result)
      
    }
    fetchData()
    
  }, [])
  
  return (
    <div className="document">
        <Navbar/>
      {/* <pre>{JSON.stringify(item, null, '\t')}</pre> */}
      <div className="content">
      <form className=" m-4" action="" onSubmit={onSubmitHandler}>
        <input type="text" className="input-field" placeholder="Title of document"
          onChange={e => setItem({ ...item, title: e.target.value })}
        />
        <FileBase64
        
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div>
        {/* <button className="btn">submit</button> */}
        <button className="button-67" >Add Document</button>

        </div>
      </form>
<div className='cardss'>
      {items?.map(item => (
        <div className="cardd" key={item._id}>
            <h2 className="cardd-title ">{item.title}</h2>
          
            <img className="" alt = "someImage" style={{ width: 'auto', height: "auto" }} src={item.image} />
          
        </div>
      ))}
      </div>
</div>
    </div>
  );
}

export default Document;