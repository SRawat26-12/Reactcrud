import { useState,useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom';
const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const myNav=useNavigate();
    const loaddata=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }

useEffect(()=>{
    loaddata();
},[]);


const mydel=(myid)=>{
    let url=`http://localhost:3000/student/${myid}`;
    axios.delete(url).then((res)=>{
        alert("Record deleted");
        loaddata();
    })
}
const myEdit=(myid)=>{
    myNav(`/myedit/${myid}`)
}

const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fess}</td>
            <td>


    
<a href="#">
    <img src="public/images/delete.png" width="30" height="30" onClick={()=>{mydel(key.id)}}/>
    </a> 
    <a href="#">
    <img src="public/images/edit.png" width="30" height="30" onClick={()=>{myEdit(key.id)}}/>
    </a> 


            </td>
        </tr>
        
        </>
    )
})
return(
    <>
<h1>Update data</h1>
<Table>

    <thead>
        <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fess</th>
        </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
</Table>
    
    </>
)
}
export default Update;