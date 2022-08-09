import React, { useState } from 'react';
import paragraph from './data';
function App() {

  const [paragraphs, setParagraphs] = useState(1);
  const [data, setData] = useState([]);

  const manageOnChange = (event) => {
    if (event.target.value >= 0)
      setParagraphs(Number(event.target.value))
  }
  /**
   * `splice` to `splice` an Array that is not the original.
   * @param {*} event 
   */
  const manageOnclick = (event) => {
    event.preventDefault()
    setData(paragraph.slice().splice(0, paragraphs));
    console.log(paragraph);
  }
  return (
    <main>
      <section className='section-center'>
        <h3>Tired of boring Lorem Ipsum ?</h3>
        <form className='lorem-form'>
          <label>Paragraphs</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={paragraphs}
            onChange={(e) => {
              manageOnChange(e)
            }}
          />
          <button className="btn" onClick={(e) => {
            manageOnclick(e)
          }}>generate</button>
        </form>
        {data.map((paragraph, index) => {
          return <article className="lorem-text">
            {paragraph}
          </article>
        })}


      </section>
    </main>
  )
}

export default App;
