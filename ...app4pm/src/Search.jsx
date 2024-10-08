import{useState} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const[rollno,setRollno]=useState("");
    const[mydata,setMydata]=useState([]);

    const mySearch=()=>{
        let url=`http://localhost:3000/student/?rollno=${rollno}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
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
        <h1> search data</h1>
        Enter Rollno:<input type="text" value={rollno}
        onChange={(e)=>{setRollno(e.target.value)}}/>
        <button onClick={mySearch}>Search</button>
        <hr/>
        <Table>

            <thead>
                <tr>
                <th>Rollno</th>
               <th>Name</th>
                <th>city</th>
                <th>fees</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </Table>
        
        </>
    )
}
export default Search;