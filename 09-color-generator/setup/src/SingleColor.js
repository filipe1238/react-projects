import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, hex, weight, type }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 2000);
  }, [alert])
  return <>

    <article className={`color ${type === 'shade' ? (weight > 10) && 'color-light' : 'color-value'}`}
      style={{
        backgroundColor: `#${hex}`
      }}
      onClick={() => {
        navigator.clipboard.writeText('#' + hex)
        setAlert(true)
      }}>
      <p className='color-value'>
        {weight}%
      </p>
      <p className='color-value'>
        #{hex}
      </p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>

  </>

}

export default SingleColor
