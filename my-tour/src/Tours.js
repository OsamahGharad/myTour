import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removMe}) => {
  return (
    <section>
      <div className="title">
        <h2>Ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map( tour => {
          return <Tour key={tour.id} {...tour} removeMe ={removMe} />
          
        })}
      </div>
    </section>
  )
};

export default Tours;
