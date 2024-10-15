import React from 'react'

const Card = (props) => {
  return (
    <div className='reactcard'>
        <h1>This is react {props.title}</h1>
        <h2>Learning React {props.desc}</h2>
    </div>
  )
}

export default Card