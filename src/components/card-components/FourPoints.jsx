import React from 'react'
import './card.css'

export default function Card(title, body) {
  return (
    <div className='card-container'>
      
      <div className='card-content'>
        <div className='card-title'>
          <h3>Four Interesting Things About Me</h3>
          <hr></hr>
        </div>
        <div className="card-body">
           <p><strong>I have 4 dogs.</strong></p>
           <p><strong>My favorite movie is <em>Surfs Up</em>.</strong></p>
           <p><strong>I have an older and younger brother.</strong></p>
           <p><strong>My favorite food is sushi.</strong></p>
        </div>
      </div>
    </div>
  )
}