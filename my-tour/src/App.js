import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours,setTours]= useState([]);
  const [loading,setLoading]=useState(true);

  const removeMe = (id) => {
    const newTour= tours.filter((tour) =>tour.id !== id);
    setTours(newTour);
  }
 
  const fetchTours = async()=> {
    setLoading(true);
   const response =await fetch(url);
   const tours = await response.json();
   setTours(tours);
   console.log(tours);
   setLoading(false);
  }
  useEffect(()=>{
             fetchTours();
  },[])
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
  <main>

      {tours.length>0?<Tours  tours={tours} removeMe={removeMe}/>:<div className="title"><h2>no Tours left</h2>
      <button className="btn" onClick={fetchTours} >refresh</button> </div>}
  </main> 
    
  )
}

export default App
