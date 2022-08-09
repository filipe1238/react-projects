import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, hex, weight, type }) => {
  return <>
    {type === 'tint' && <article className={`color `}
      style={{
        backgroundColor: `#${hex}`
      }}
      onClick={() => {
        navigator.clipboard.writeText('#' + hex)
      }}>
      <p className='color-value'>
        {weight}%
      </p>
      <p className='color-value'>
        #{hex}
      </p>
    </article>
    }
    {type === 'shade' && <article className={`color ${(weight > 10) && 'color-light'}`}
      style={{
        backgroundColor: `#${hex}`
      }}
      onClick={() => {
        navigator.clipboard.writeText('#' + hex)
      }}>
      <p className='color-value'>
        {weight}%
      </p>
      <p className='color-value'>
        #{hex}
      </p>
    </article>
    }
  </>

}

export default SingleColor
