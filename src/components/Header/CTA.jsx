import React from 'react'
import CV from './../../assets/PeterCV.docx'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV </a>
        <a href="#" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA