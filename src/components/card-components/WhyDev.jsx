import React from 'react'
import './card.css'

export default function Card(title, body) {
  return (
    <div className='card-container'>
      
      <div className='card-content'>
        <div className='card-title'>
          <h3>Why I Want To Be A Developer</h3>
          <hr></hr>
        </div>
        <div className="card-body"><p><strong>I want to learn how to be a developer because it's a rewarding career and there are many oppertunities that come with it.</strong></p></div>
      </div>
    </div>
  )
}