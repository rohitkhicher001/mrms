import React,{useState,useEffect} from "react"
import "./myrecord.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";

import MaterialTable from 'material-table';

const Myrecord = () => {
    const navigate = useNavigate()
const [recorddata,setRecorddata] = useState([{}])
    useEffect(()=>{
        async function getRecord(){
            axios.get("http://localhost:5000/myrecord")
            .then((res)=>{
                const reqdata = res.data;
                console.log(reqdata);
                setRecorddata(reqdata);
            })
        }
        getRecord()
        
    },[])

    const columns = [
        {

            title: 'Name of disease',
            field: 'nameofdisease'
        },
        {
            title: 'Description',
            field: 'description'
        },
        {
            title: 'Date',
            field: 'date'
        },
        {
            title: 'Duration (In months)',
            field: 'duration'
        },{
            title: 'Hospital',
            field: 'hospital'
        },{
            title: 'Prescription',
            field: 'prescription'
        },
        {
            title: 'Side Effects',
            field: 'anyeffects'
        },
    ]
    
    // console.log(recorddata);

    return (
        <div className="myrecord">
        <Navbar/>
        
          

          <div>
         

                <MaterialTable 
                    title = "My Record"
                    data = {recorddata}
                    columns={columns}
                    options={{
                        exportButton: true,
                        rowStyle: {
          backgroundColor: '#d7dbda',
        }
                    }
                    }
                />
         </div>
          <div className="button-67"  onClick={()=>navigate("/addrecord")}>Add Record</div>
          

        </div>
    )
}

export default Myrecord