import React from 'react'
import one from '../assets/one.png'
import './loader.css'

const Loader = () => {
  return (
    <div>
      <div className={`chat chat-start`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={one} alt='avatar' />
          </div>
        </div>
        <div className="loader">
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader