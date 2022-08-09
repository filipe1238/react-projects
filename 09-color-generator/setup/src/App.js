import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [colorList, setColorList] = useState([])
  const [error, setError] = useState(false);

  const manageSubmit = (event) => {
    event.preventDefault()
    let colors = ''
    let hexCode = color.match(/^#[a-f0-9]{6}/gi);
    try {

      setError(false);
      colors = new Values(hexCode[0]).all(20)/*return a list of rgb's*/
      if (hexCode != null) {
        setColorList(colors)
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }

  }

  return <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form className='form-input' onSubmit={(e) => { manageSubmit(e) }}>
        {error && <p className='message'>Invalid hex Code</p>}
        <input
          className={`${error === true ? 'error' : ''}`}
          placeholder='Insert Hexcode of 6 digits'
          value={color}
          onChange={(e) => setColor(e.target.value)} />

        <button type='submit' className={`btn`}>
          Submit
        </button>
      </form>

    </section>
    <section className='colors' >
      {colorList.map((singleColor, index) => {
        return <SingleColor
          key={index}
          {...singleColor}
          hex={singleColor.hex} />
      })}

    </section>


  </>
}

export default App
