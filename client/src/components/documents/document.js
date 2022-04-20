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
      <form action="" onSubmit={onSubmitHandler}>
        <input type="text" className="input-field" placeholder="Title of document"
          onChange={e => setItem({ ...item, title: e.target.value })}
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
        {/* <button className="btn">submit</button> */}
        <div className="button-67" >Add Document</div>

        </div>
      </form>
      {items?.map(item => (
        <div className="card" key={item._id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" alt = "someImage" style={{ width: '50%', height: "auto" }} src={item.image} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Document;