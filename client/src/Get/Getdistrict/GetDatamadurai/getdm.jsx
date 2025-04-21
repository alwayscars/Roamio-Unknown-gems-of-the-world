import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
function Getm() {
  const[place,setplace]=useState([])
  useEffect(()=>{
    const fetchData =async()=>{
      try{
       const response=  await axios.get("http://localhost:8000/places/TamilNadu/Madurai");
       setplace(response.data)
      }catch(error){
        console.log("Error fetching data",error)
      }
  };fetchData()
},[]);



    return (
      <>
        <Link to="/getdistrict" type="button">Back</Link>
        <h1>Gems of Madurai</h1>
        {place.length===0 ?(
      <div className='noData'>
        <h3>No place found. Places will be updated soon</h3>
        </div>
    ) :(
    <table className='table  table-bordered'>
      <tbody>
      {place.map((items)=>{
          return(
            <>
        <tr>
          <td>{items.name}</td>
        </tr>
        <tr>
          <td>{items.State}</td>
        </tr> 
        <tr>
          <td><img src={`http://localhost:8000/uploads/${items.filename}`}></img></td>
        </tr> 
        <tr>
          <td><a href={`${items.maplink}`}>Click here to see on maps</a></td>
        </tr> 
        </>
    )
        })}
        
      </tbody>
    </table>)}
        
      </>
    )
  }
  
  export default Getm