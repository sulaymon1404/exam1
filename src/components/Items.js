import './Items.css'
import React from 'react'


 export default function Items(props) {
    return (
      <div className='item'>
          <div className='size2'>
              <img src={props.book}/>
              <h3>{props.h3}</h3>
              <img src={props.dot}/>
              <span><p>{props.p}</p></span>
              <img src={props.dot}/>
              <span><p>{props.p2}</p></span>
          </div>
      </div>
    )
  }