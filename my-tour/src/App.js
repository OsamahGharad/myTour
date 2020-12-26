import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours,setTours]= useState([]);
  const [loading,setLoading]=useState(true);
 
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
  return (<main>
      <Tours  tours={tours}/>
  </main>
    
  )
}

export default App
