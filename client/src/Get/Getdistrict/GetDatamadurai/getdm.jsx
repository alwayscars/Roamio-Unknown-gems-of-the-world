import { ArrowLeftIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import "./getdm.css"
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
        <Link to="/getdistrict"className="custom-button back-button" aria-label="Go back" type="button"></Link>
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
        {/* <tr>
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
        </tr>  */}


        

  <main className="main-container min-h-screen w-full px-4 md:px-8 lg:px-16 py-8">
      <div className="custom-card">
        <div className="custom-card-content">
          <div className="relative mb-12">
            <header className="pt-12 pb-16 text-center">
              <h2 className="heading-secondary font-medium text-4xl md:text-7xl tracking-[-2.16px] leading-tight">
                {items.name}
              </h2>
            </header>
          </div>

          <figure className="image-container mb-16 mx-4 overflow-hidden">
            <img
              className="temple-image w-full h-auto max-h-[519px] object-cover transition-all duration-700 hover:scale-105"
              alt="Meenakshi Amman Temple"
              src={`http://localhost:8000/uploads/${items.filename}`}
            />
          </figure>

          <section className="mb-16 px-4">
            <p className="description-text font-medium text-lg md:text-2xl leading-relaxed tracking-wide">
              {items.description}
            </p>
          </section>

          <div className="flex justify-center mb-8">
            <button className="custom-button map-button" onClick={`${items.maplink}`}>    
            <a href={`${items.maplink}`} className="link">Click here to see on maps</a>
            </button>
          </div>
        </div>
      </div>
    </main>



        </>
    )
        })}
        
      </tbody>
    </table>)}
        
      </>
    )
  }
  
  export default Getm