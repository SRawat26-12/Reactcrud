import {useEffect,useState} from 'react';
import Table from "react-bootstrap/Table";
import axios from 'axios';


const Display=()=>{
 const [mydata,setMydata]=useState([]);
 const loadData=()=>{
    let url="http://localhost:3000/student";
    axios.get(url).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
    })
 }       

useEffect(()=>{
 loadData();
},[])

const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fess}</td>
        </tr>
        </>
    )
})
return(
    <>
    <h1>This is display page</h1>
    <hr size="2" color=" black" style={{border:"2px solid black"}}/>
    <Table>
    <thead>
        <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
    </Table>  
    </>
)
}
export default Display;