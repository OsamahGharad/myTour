import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeMe}) => {
  const [showMore,setShowMore]=useState(false);
  return <article className="single-tour">
        <img src={image} alt={name}/>
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>{showMore? info:`${info.substring(0,200)}...`} 
           <button onClick={()=>setShowMore(!showMore)}>{showMore?'Show Less': 'show more'}</button></p>
          <button className="delete-btn" onClick={()=>removeMe(id)}>not interested</button>
        </footer>
  </article>;
};

export default Tour;
