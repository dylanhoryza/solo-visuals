import avatarImage from '../assets/beau-avatar.jpg';
import '../styles/aboutpage.css';
import { Link } from 'react-router-dom';
import FilmIcon from '../about-images/film.png'
import Clapper from '../about-images/clapperboard.png'
import FilmIcon2 from '../about-images/film (1).png'
import VideoIcon from '../about-images/video-camera.png'
import MusicIcon from '../about-images/musical-note.png'
import EventIcon from '../about-images/cheers.png'
import PhotoIcon from '../about-images/camera-to-take-photos.png'
import SocialMedia from '../about-images/cell-phone.png'

export default function AboutPage() {
  return (
    <section className='about-container' id='home'>
      <div className='our-services'>
        <div className='service-title'>
          <h1 className='services-header'>OUR <span>SERVICES</span></h1>
        </div>
        <div className='image-grid'>
          <div className='grid-item'>
            <img src={MusicIcon} alt='Description 1' />
            <h2 className='image-title'>Music Videos</h2>
            <p>We speacialize in bringing your song to life with creating a full length music video with 4k quality, color correction, and the ability to travel to any location.</p>
            <Link to="/videos/music">
            <button className='watch-btn-about'>View</button>
         </Link>
          </div>
          <div className='grid-item'>
            <img src={EventIcon} alt='Description 2' />
            <h2 className='image-title'>Events</h2>
            <p>We shoot all types of events including but not limited to concerts, corporate events, weddings, birthdays, sports, meetings, interviews and grand openings.</p>
            <Link to="/videos/events">
            <button className='watch-btn-about'>View</button>
         </Link>
          </div>
          <div className='grid-item'>
            <img src={PhotoIcon} alt='Description 3' />
            <h2 className='image-title'>Photography</h2>
            <p>Book a photoshoot to capture special moments from your concerts, engagements, weddings, or if you need professional headshots or business photos.</p>
            <Link to="/photos">
            <button className='watch-btn-about'>View</button>
         </Link>
          </div>
          <div className='grid-item'>
            <img src={SocialMedia} alt='Description 4' />
            <h2 className='image-title'>Short Form Content</h2>
            <p>Short form content is essential to any business or creative looking to market their brand or even highlight life events. This is great for video ads, behind the scenes, social media, and marketing.</p>
            <Link to="/videos/lifestyle">
            <button className='watch-btn-about'>View</button>
         </Link>
          </div>
        </div>
      </div>
      <div className='meet-the-team'>
        <div className='service-title'>
          <h1 className='services-header'>MEET THE <span>TEAM</span></h1>
        </div>
        <div className='container'>
          <div className='row about-container'>
            <div className='col-md-6'>
              <img src={avatarImage} alt='avatar' className='avatar' />
            </div>
            <div className='col-md-6'>
              <div class='card about-me-card'>
                <div class='card-body'>
                  <p class='card-text' id='about-bio'>
                    Beau Horyza is a Film Director, Photographer, Editor and
                    Founder/Owner of Solo Visuals based in Scottsdale, Arizona.
                    As a Scottsdale native, Beau loves exploring Arizona and
                    taking his camera with him everywhere he goes. <br />
                    <br /> Beau finished up his Film School degree at Scottsdale
                    Community College. He has worked on multiple short film and
                    movie sets as Director of Photography, and Camera Operator,
                    including a short film that was accepted and screened at the
                    Scottsdale Short Film Festival in 2017. He’s directed
                    multiple music videos accumulating millions of views.
                    <br /> <br />
                    While traveling and touring with music artists, Beau
                    continues to grow his talents day by day. When he's not
                    glued to the computer or camera, he spends his time outside
                    the viewfinder playing basketball or getting a good workout
                    session in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='our-process'>
        <div className='service-title'>
          <h1 className='services-header'>OUR <span>PROCESS</span> </h1>
        </div>
        <div className='image-grid'>
          <div className='grid-item'>
            <img src={FilmIcon} alt='Description 1' />
            <h2 className='image-title'>Consultation</h2>
            <p>Upon booking, we will meet with you and get an idea of everything you are looking for so we can bring your creative vision to life!</p>
          </div>
          <div className='grid-item'>
            <img src={Clapper} alt='Description 2' />
            <h2 className='image-title'>Conceptualiztion</h2>
            <p>Behind the scenes, we will develop a storyboard and treatment that includes everything we discussed during the consultation as well as reference images and locations.</p>
          </div>
          <div className='grid-item'>
            <img src={VideoIcon} alt='Description 3' />
            <h2 className='image-title'>Production</h2>
            <p>Where the fun begins! The day of your shoot will be dedicated to delivering everything planned in the treatment as we bring our ideas to life!</p>
          </div>
          <div className='grid-item'>
            <img src={FilmIcon2} alt='Description 4' />
            <h2 className='image-title'>Post-Production</h2>
            <p>Editing begins from all of the content captured from your shoot and we will work hard to deliver everything by the agreed upon deadline.</p>
          </div>
        </div>
      </div>

      <div className='brands-section'>
        <div className='service-title'>
          <h1 className='services-header'>BRANDS THAT <span> TRUST US</span></h1>
        </div>
      </div>
    </section>
  );
}
