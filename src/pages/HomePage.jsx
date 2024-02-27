import '../styles/homepage.css';
import avatarImage from '../assets/beau-avatar.jpg';
export default function HomePage() {
  return (
    <section className='container' id='home'>
    
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
      <div className='row'>
        <div className='col-md-6'>
          <img src={avatarImage} alt='avatar' className='avatar' />
        </div>
        <div className='col-md-6'>
          <div class='card about-me-card'>
            <div class='card-body'>
              <h5 class='card-title'>About</h5>
              <p class='card-text' id='about-bio'>
                Beau Horyza is a Film Director, Photographer, Editor and
                Founder/Owner of Solo Visuals based in Scottsdale, Arizona. As a
                Scottsdale native, Beau loves exploring Arizona and taking his
                camera with him everywhere he goes. <br /><br /> Beau finished up his Film
                School degree at Scottsdale Community College. He has worked on
                multiple short film and movie sets as Director of Photography,
                and Camera Operator, including a short film that was accepted
                and screened at the Scottsdale Short Film Festival in 2017. He’s
                directed multiple music videos accumulating millions of views.
                <br /> <br />
                While traveling and touring with music artists, Beau continues
                to grow his talents day by day. When he's not glued to the
                computer or camera, he spends his time outside the viewfinder
                playing basketball or getting a good workout session in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button className='contact-btn'>Contact</button>
      </div>
    </section>
  );
}
