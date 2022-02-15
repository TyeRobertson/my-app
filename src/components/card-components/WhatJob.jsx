import React from 'react'
import './card.css'

export default function Card(title, body) {
  return (
    <div className='card-container'>
      
      <div className='card-content'>
        <div className='card-title'>
          <h3>What Job I See Myself In</h3>
          <hr></hr>
        </div>
        <div className="card-body"><p><strong>I see myself in a developer position in the future. I haven't decided exactly what kind yet.</strong></p></div>
      </div>
    </div>
  )
}
