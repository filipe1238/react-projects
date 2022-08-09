import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (num) => {
    if (num >= people.length)
      return 0
    if (num < 0)
      return people.length - 1
    return num
  }

  const manageIndexes = (isNext) => {
    if (isNext === true) {
      setIndex(checkNumber(index + 1))
    } else {
      setIndex(checkNumber(index - 1))
    }
  }

  return <article className='review'>

    <div className='img-container'>
      <img src={image} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>

    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <button className='prev-btn' onClick={() => { manageIndexes(false) }}>Prev</button>
    <button className='next-btn' onClick={() => { manageIndexes(true) }}>Next</button>
  </article>


};

export default Review;
