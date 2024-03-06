import '../styles/homepage.css';
import SoloImage from '../assets/solovisualswhite.png';
import { Link } from 'react-router-dom';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedSectionTitle = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.7, // When 50% of the element is in view
  });

  // Define the spring animation properties
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  return (
    <animated.h2 ref={ref} className='section-title' style={animation}>
      {children}
    </animated.h2>
  );
};

export default function HomePage() {
  return (
    <div className='home-container' id='home'>
          
          <div className='home-about-section'>
            <div className='image-container'>
            <img src={SoloImage} alt="solo-logo" className='solo-logo-2'/>
            </div>
            <h3 className='company-about'>A VISUAL MEDIA COMPANY</h3>
            <div className='contact-button-container'>
              <Link to="/contact">
              <button className='home-contact'>Contact</button>
              </Link>
            </div>
            
            
            <div className='icon-scroll'></div>
          </div>
      <div className='home-music-videos'>
        <div className='title-container'>
        <AnimatedSectionTitle>MUSIC <span>VIDEOS</span></AnimatedSectionTitle>
          {/* <p className='section-description'>Music videos in various genres shot, directed and edited by Solo Visuals.</p> */}
          <Link to="/videos/music">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-concert-videos'>
        <div className='title-container-right'>
        <AnimatedSectionTitle>EVENT <span>RECAPS</span></AnimatedSectionTitle>
          {/* <p className='section-description'>Concerts, corporate events, grand openings and more!</p> */}
          <Link to="/videos/events">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-lifestyle-videos'>
        <div className='title-container'>
        <AnimatedSectionTitle>LIFE<span>STYLE</span></AnimatedSectionTitle>
          {/* <p className='section-description'>Description goes here</p> */}
          <Link to="/videos/lifestyle">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-commerical-videos'>
        <div className='title-container-right'>
        <AnimatedSectionTitle>COMMER<span>CIALS</span></AnimatedSectionTitle>
          {/* <p className='section-description'>Description goes here</p> */}
          <Link to="/videos/commercials">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className="youtube-video">
            <iframe className='youtube-box'
              width="100%"
              height="1100"
              src="https://www.youtube.com/embed/F79OaL7Cn8Q?&modestbranding=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
    </div>
  );
}
