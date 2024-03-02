import '../styles/homepage.css';
import SoloImage from '../assets/solovisualswhite.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='home-container' id='home'>
          
          <div className='home-about-section'>
            <div className='image-container'>
            <img src={SoloImage} alt="solo-logo" className='solo-logo-2'/>
            </div>
            <h3 className='company-about'>A visual media company</h3>
            <div className='contact-button-container'>
            <button className='home-contact'>Contact</button>
            </div>
            <p className='scroll'>*scroll down*</p>
          </div>
      <div className='home-music-videos'>
        <div className='title-container'>
          <h2 className='section-title'>Music Videos</h2>
          <p className='section-description'>Music videos in various genres shot, directed and edited by Solo Visuals.</p>
          <Link to="/videos/music">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-concert-videos'>
        <div className='title-container-right'>
          <h2 className='section-title'>Events</h2>
          <p className='section-description'>Description goes here</p>
          <Link to="/videos/events">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-lifestyle-videos'>
        <div className='title-container'>
          <h2 className='section-title'>Lifestyle</h2>
          <p className='section-description'>Description goes here</p>
          <Link to="/videos/lifestyle">
            <button className='watch-btn'>View</button>
         </Link>
        </div>
      </div>
      <div className='home-commerical-videos'>
        <div className='title-container-right'>
          <h2 className='section-title'>Commercial</h2>
          <p className='section-description'>Description goes here</p>
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
