import React from 'react'
import './card.css'

export default function AboutMe() {
    return (
        
          <div className='card-title'>
            <h2>About Me</h2>
            <hr></hr>
            <img src={ require('./personal_image.jpg') } alt='image_placeholder'  />
          </div>
    )
  }
