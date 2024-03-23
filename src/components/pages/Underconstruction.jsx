import React from 'react'
import Underimg from "../../assets/underImg.webp"
import "../../styles/underconstruction.css"

const Underconstruction = () => {
  return (
    <div className='container'>
      <section className='under'>
            <div className="left">
                <h3>
                We’re still working on it, Come back later
                </h3>
                <h2>
                Page now Is under Construction ...
                </h2>
            </div>
            <div className="right">
                <img src={Underimg} alt="underconstruction_img" />
            </div>
      </section>
    </div>
  )
}

export default Underconstruction