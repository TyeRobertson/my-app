import React from 'react'
import './card.css'

export default function Card(title, body) {
  return (
    <div className='card-container'>
      
      <div className='card-content'>
        <div className='card-title'>
          <h3>Where I'm From</h3>
          <hr></hr>
        </div>
        <div className="card-body"><p><strong>I'm from Appomattox, Virginia and have lived there all my life.</strong></p></div>
      </div>
    </div>
  )
}