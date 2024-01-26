import React from 'react'
import slot1 from '../../assets/slot1.png'
import slot2 from '../../assets/slot2.png'
import slot3 from '../../assets/slot3.png'
import slot4 from '../../assets/slot4.png'
import heroImg from '../../assets/heroImg.png'
import "../../styles/home.css"
const Home = () => {
  return (
    <div className='container'>
      <section className="hero">
        <img src={heroImg} alt='heroImg' id='heroimg'></img>
        <div className="inner">
          <h4>Welcome To MUSK!</h4>
          <p className='main-para'>
          We are <span>MUSK,</span> A hub helping innovative students <span>become real entrepreneurs.</span>
          </p>
          <p className='small-para'>
          Gain the knowledge, skills, and mindset necessary to thrive in today's dynamic business landscape.
          </p>
        </div>
        <div className="circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="68" height="84" viewBox="0 0 68 84" fill="none"><path d="M33.5177 0V82M33.5177 82L36.6615 70.1423C40.7751 54.6271 51.6724 41.7977 66.3177 35.2281V35.2281M33.5177 82L30.4436 69.7952C26.5932 54.5082 16.0144 41.7939 1.68237 35.2281V35.2281" stroke="black" stroke-width="8" stroke-linejoin="bevel"/>
        </svg>
        </div>
      </section>
      <section className='explore'>
        <div className="explore-header">
        <h4>Empowering Futures Together</h4>
        <h3>Explore our courses and programs<br/><span>Your ultimate guide to   entrepreneurship</span></h3>
        </div>
        <div className='slots'>
          <div className="slot"><div className="wrapper"></div><img src={slot1} alt="slot 1"></img><div className="inner-text"><h2>MUSK Summer program</h2><p>Body text content</p></div></div>
          <div className="slot"><div className="wrapper"></div><img src={slot2} alt="slot 2"></img><div className="inner-text"><h2>Entrepreneurship</h2><p>body text content</p></div></div>
          <div className="slot"><div className="wrapper"></div><img src={slot3} alt="slot 3"></img><div className="inner-text"><h2>Mentoring sessions</h2><p>body text content</p></div></div>
          <div className="slot"><div className="wrapper"></div><img src={slot4} alt="slot 4"></img><div className="inner-text"><h2>Summits and events</h2><p>body text content</p></div></div>
        </div>
      </section>
      <section className="why-musk">
        <div className="left">
          <h4>our service benefits</h4>
          <h2>Why Choose Musk?</h2>
          <svg id='why-desk' xmlns="http://www.w3.org/2000/svg" width="174" height="128" viewBox="0 0 174 128" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M106.249 1C116.469 28.3243 140.354 48.2242 169.075 53.3433L172.59 53.9699V74.0301L169.075 74.6567C140.354 79.7758 116.469 99.6757 106.249 127L87.1643 119.862C94.0502 101.452 105.911 85.7448 121.01 74.1882L1 74.1882L1 53.8119L121.01 53.8119C105.911 42.2552 94.0502 26.5483 87.1643 8.1383L106.249 1Z" stroke="black" stroke-width="2" stroke-linejoin="bevel"/>
          </svg>
          <svg id='why-mob' xmlns="http://www.w3.org/2000/svg" width="105" height="129" viewBox="0 0 105 129" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M98.8113 125.175C73.4186 110.812 42.3303 110.921 17.0387 125.461L13.9428 127.24L1.04842 111.874L3.33872 109.134C22.0493 86.7511 27.5548 56.1541 17.8201 28.6531L37.0285 21.8537C43.5873 40.3827 44.5976 60.0389 40.4598 78.5971L132.393 1.45635L145.49 17.0655L53.5574 94.2063C72.5523 93.3539 91.7344 97.7621 108.843 107.439L98.8113 125.175Z" stroke="black" stroke-width="2" stroke-linejoin="bevel"/>
          </svg>
        </div>
        <div className="right">
          <div className="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
          <path d="M14.0892 14.0892L9.55572 9.55572M38.2675 14.0892L42.8009 9.55572M9.55572 42.8009L14.0892 38.2675M26.1783 8.04458V2M8.04458 26.1783H2M44.7965 44.2779L56.5581 39.6756C57.8392 39.1745 57.8386 37.3617 56.5575 36.8609L28.2915 25.8153C27.0647 25.336 25.8546 26.5461 26.334 27.7729L37.3795 56.0388C37.8803 57.32 39.6931 57.3206 40.1942 56.0394L44.7965 44.2779Z" stroke="#CA00FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div className="row-inner">
          <h3>Learn With One Click</h3>
          <span>Learn on your own pace with one click</span>
          </div>
          </div>
          <div className="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="59" viewBox="0 0 46 59" fill="none">
          <path d="M44.5186 2H8.55709C4.96094 2 2.21094 4.75 2.21094 8.34615M2.21094 8.34615C2.21094 11.9423 4.96094 14.6923 8.55709 14.6923H44.5186V57H8.55709C4.96094 57 2.21094 54.25 2.21094 50.6538V8.34615ZM44.5186 8.34615H8.55709M12.7879 14.6923V40.0769L19.134 37.9615L25.4802 40.0769V14.6923" stroke="#3959FF" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div className="row-inner">
          <h3>Organized Content</h3>
          <span>Our content is clear and extensive with organized courses
          </span>
          </div>
          </div>
          <div className="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="59" viewBox="0 0 50 59" fill="none">
          <path d="M37.5929 42.2213V57L24.9255 50.6663L12.258 57V42.2213M24.9255 14.7752V16.8864M24.9255 29.5539V31.6651M27.0367 16.8864H23.8699C22.1809 16.8864 20.703 18.3643 20.703 20.0533C20.703 21.7423 22.1809 23.2201 23.8699 23.2201H25.9811C27.6701 23.2201 29.148 24.698 29.148 26.387C29.148 28.076 27.6701 29.5539 25.9811 29.5539H22.8142M4.86869 16.6753L5.92431 15.8308C7.6133 14.5641 8.88005 12.4528 9.09117 10.3416L9.3023 9.49709C10.1468 4.00786 16.0583 0.629873 21.5475 2.74111C23.8699 3.58561 26.1922 3.58561 28.5146 2.74111C33.7927 0.418749 39.9153 3.79673 40.7598 9.49709L40.9709 10.3416C41.1821 12.4528 42.4488 14.5641 44.1378 15.8308L45.1934 16.6753C49.627 20.0533 49.627 26.387 45.1934 29.765L43.9267 30.6095C42.2377 31.8762 40.9709 33.9875 40.7598 36.0987L40.5487 36.9432C39.7042 42.4325 33.7927 45.8104 28.3035 43.6992C25.9811 42.8547 23.6587 42.8547 21.3364 43.6992C16.0583 46.0216 9.93567 42.6436 9.09117 36.9432L8.88005 36.0987C8.66892 33.9875 7.40218 31.8762 5.71319 30.6095L4.65756 29.765C0.646204 26.387 0.646204 20.0533 4.86869 16.6753Z" stroke="#FFC001" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div className="row-inner">
          <h3>budget friendly</h3>
          <span>Our courses are priced affordably, making them a great option for those on a budget.</span>
          </div>
          </div>
          <div className="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="59" viewBox="0 0 52 59" fill="none">
          <path d="M50.5186 57V50.8889C50.5186 47.6474 49.2309 44.5386 46.9388 42.2465C44.6467 39.9544 41.5379 38.6667 38.2964 38.6667H35.2408C34.4304 38.6667 33.6533 38.3447 33.0802 37.7717C32.5072 37.1987 32.1853 36.4215 32.1853 35.6111V20.3333C32.1853 18.7126 31.5414 17.1582 30.3954 16.0121C29.2493 14.8661 27.6949 14.2222 26.0742 14.2222C24.4534 14.2222 22.899 14.8661 21.7529 16.0121C20.6069 17.1582 19.963 18.7126 19.963 20.3333V47.8333L12.6297 38.0556C12.0605 37.2966 11.3223 36.6806 10.4738 36.2563C9.62523 35.832 8.68953 35.6111 7.74081 35.6111H6.4147C3.77165 35.6111 1.6297 37.7531 1.6297 40.3961C1.6297 41.2639 1.86498 42.1164 2.31109 42.8589L10.7964 57M26.0742 5.05556V2M44.4075 23.3889H47.4631M4.68526 23.3889H7.74081M11.8444 9.15917L9.68415 6.99889M40.3039 9.15917L42.4642 6.99889" stroke="#FF2F01" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div className="row-inner">
          <h3>Smoth Process</h3>
          <span>We strive to make the process as fast and efficient as possible</span>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
