import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const { id, title, info } = props.question
  const [open, setOpen] = useState(false)
  console.log(props)

  const manageOnClick = (openText) => {
    if (openText === true) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return <section className='question'>
    <header><h4>{title}</h4>
      {open && <button className='btn' onClick={() => manageOnClick(false)}><AiOutlineMinus /></button>}
      {!open && <button className='btn' onClick={() => manageOnClick(true)}><AiOutlinePlus /></button>}
    </header>
    {open && <p>{info}</p>}
  </section>;
};

export default Question;
