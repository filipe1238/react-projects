import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [reviews, setReviews] = useState(data);
  const [reviewSelected, setReviewSelected] = useState(0);
  
  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (reviewSelected < 0) {
      setReviewSelected(lastIndex);
    }
    if (reviewSelected > lastIndex) {
      setReviewSelected(0);
    }
  }, [reviews, reviewSelected])



  return <>
    <section className='section'>
      <h2 className='title'><span className='icon'>/</span>Reviews</h2>
    </section>
    <div className='section-center'>


      {reviews.map((review, ArrayIndex) => {

        let position = 'nextSlide';
        if (ArrayIndex === reviewSelected) {
          position = 'activeSlide';
        }
        if (
          ArrayIndex === reviewSelected - 1 ||
          (reviewSelected === 0 && ArrayIndex === reviews.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (

          <article className={position}>
            <img className='person-img' src={review.image}></img>
            <h4>{review.name}</h4>
            <p className='title'>{review.title}</p>
            <p className='text'>{review.quote}</p>
            <button className='prev' onClick={() => {
              setReviewSelected(reviewSelected - 1)
            }}><FiChevronLeft /></button>

            <button className='next' onClick={() => {
              setReviewSelected(reviewSelected + 1)
            }}><FiChevronRight /></button>

            <FaQuoteRight className='icon' />
          </article>)
      })}

    </div >












    {/* <section className='section'>
      <h2 className='title'><span className='icon'>/</span>Reviews</h2>
    </section>
    <div className='section-center'>



      <article className={activeSlide}>
        <img className='person-img' src={reviews.image}></img>
        <h4>{reviews.name}</h4>
        <p className='title'>{reviews.title}</p>
        <p className='text'>{reviews.quote}</p>
        <button className='prev' onClick={(e) => { manageClick(false) }}><FiChevronLeft /></button>
        <button className='next' onClick={(e) => { manageClick(true) }}><FiChevronRight /></button>
        <FaQuoteRight className='icon' />
      </article>
    </div > */}
  </>
}


export default App;
