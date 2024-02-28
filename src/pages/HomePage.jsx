import '../styles/homepage.css';
import avatarImage from '../assets/beau-avatar.jpg';
export default function HomePage() {
  return (
    <section className='container home-container' id='home'>
    
      <div className="youtube-video">
            <iframe className='youtube-box'
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/F79OaL7Cn8Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
    
    </section>
  );
}
