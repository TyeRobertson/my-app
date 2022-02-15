import React from 'react'
import './game.css'
import Lie from './Lie'
import Truth1 from './Truth1'
import Truth2 from './Truth2'

export default function Game() {
  return (
    <div className='gameoverview'>
      <h2>Two Truths And A Lie</h2>
      <h4>The lie will turn red</h4>
      <br></br>
        <Lie />
        <br></br>
        <Truth1 />
        <br></br>
        <Truth2 />
        
    </div>
  )
}
