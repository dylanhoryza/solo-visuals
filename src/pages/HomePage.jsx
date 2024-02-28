import '../styles/homepage.css';
import avatarImage from '../assets/beau-avatar.jpg';
export default function HomePage() {
  return (
    <div className='home-container' id='home'>
      <div className="youtube-video">
            <iframe className='youtube-box'
              width="100%"
              height="800"
              src="https://www.youtube.com/embed/F79OaL7Cn8Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
      <div className='home-music-videos'>
        <div className='title-container'>
        <h2 className='section-title'>Music Videos</h2>
        <p className='section-description'>Description goes here</p>
        <button>Watch</button>
        </div>
        
      </div>
      <div className='home-concert-videos'>
        <div className='title-container-right'>
        <h2 className='section-title'>Concerts</h2>
        <p className='section-description'>Description goes here</p>
        <button>Watch</button>
        </div>
        
      </div>
    </div>
    
  );
}
