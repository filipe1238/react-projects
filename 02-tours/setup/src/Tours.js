import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {

  return (<section>
    {
      tours.map((tour) => {
         return <Tour key={tour.id} tour={tour}/>
       
      })
    }
  </section>
  );
};

export default Tours;
