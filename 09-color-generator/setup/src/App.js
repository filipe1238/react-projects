import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [colorList, setColorList] = useState([])

  const manageSubmit = (event) => {
    event.preventDefault()
    let colors = ''
    let hexCode = color.match(/^#[a-f0-9]{6}/gi);

    if (hexCode != null) {
      colors = new Values(hexCode[0]).all(10)/*return a list of rgb's*/
      setColorList(colors)
    }else{
      return
    }
    
  }

  return <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={(e) => { manageSubmit(e) }}>
        <input
          placeholder='Insert Hexcode of 6 digits'
          value={color}
          onChange={(e) => setColor(e.target.value)} />
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>

    </section>
    <div className='colors' >
      {colorList.map((singleColor, index) => {
        return <SingleColor
          key={index}
          {...singleColor}
          hex={singleColor.hex} />
      })}

    </div>


  </>
}

export default App
