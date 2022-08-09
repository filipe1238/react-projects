import React, { useContext, useState } from 'react';
import { DeleteContext } from "./App"


const Tour = ({  tour }) => {
  const [getToggle, setToggle] = useState(true)
  const removeTour = useContext(DeleteContext);

  return <article className='single-tour'>
    <img src={tour.image} alt={tour.name}></img>
    <footer>
      <div className='tour-info'>
        <h4>{tour.name}</h4>
        <span className='tour-price'>{tour.price}$</span>
      </div>
      {getToggle ?
        <p>{tour.info.slice(0, 250)} <button onClick={() => { setToggle(!getToggle) }}>Read more</button> </p>
        :
        <p>{tour.info} <button onClick={() => { setToggle(!getToggle) }}>Read Less</button> </p>
      }

      <button className='delete-btn' onClick={()=>removeTour(tour.id)}>Dismiss</button>
    </footer>
  </article>

    ;
};

export default Tour;
