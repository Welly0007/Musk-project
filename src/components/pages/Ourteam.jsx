import React from 'react'
import Member1 from '../../assets/member1.png'
import Member2 from '../../assets/member2.png'
import Member3 from '../../assets/member3.png'

import '../../styles/ourteam.css'
const Ourteam = () => {
  return (
    <div className='container'>
      <section className='ourteam'>
        <h1>Our Team</h1>
        <p>we have assembled a team of <span>seasoned professionals</span> who are passionate about <span>entrepreneurship</span> and committed to <span>supporting individuals</span> on their journey to <span>success.</span>
        </p>
        <div className="members">
          <div className="member">
            <div className="member-img">
              <img src={Member1} alt='member1'></img>
              <span>profesional Director</span>
            </div>
            <span>Rofaida Yasser Ahmed</span>
          </div>
          <div className="member">
            <div className="member-img">
              <img src={Member2} alt='member2'></img>
              <span>Founder</span>
              </div>
              <span>Rofaida Yasser Ahmed</span>
            </div>
          <div className="member">
            <div className="member-img">
              <img src={Member3} alt='member3'></img>
              <span>Founder</span>
              </div>
              <span>Rofaida Yasser Ahmed</span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Ourteam
