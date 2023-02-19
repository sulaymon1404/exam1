import './Chem.css'
import React from 'react'

export default function Chem(props) {
  return (
    <div className='chem'>
        <img src={props.img} />
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
    </div>
  )
}
