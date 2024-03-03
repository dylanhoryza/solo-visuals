import avatarImage from '../assets/beau-avatar.jpg';
import '../styles/aboutpage.css';
export default function AboutPage() {
  return (
    <section className='about-container' id='home'>
      <div className='our-services'>
        <div className='service-title'>
          <h1 className='services-header'>Our Services</h1>
        </div>
        <div className='row service-cards'>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Short Form Content</h5>
                <div className='list-items'>
                  <li>Video ads</li>
                  <li>Behind the scenes</li>
                  <li>Marketing</li>
                  <li>Social Media</li>
                  <li>Promotion</li>
                  <li>Modeling</li>
                  <li>Life Events</li>
                  <li>Podcasts</li>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Music Videos</h5>
                <div className='list-items'>
                  <li>Full length music videos</li>
                  <li>Music video editing</li>
                  <li>Color correction</li>
                  <li>Location spotting</li>
                  <li>Storyboard and treatment</li>
                  <li>Able to shoot in any city</li>
                  <li>4k quality</li>
                  <li>Music video promo clips</li>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Photography</h5>
                <div className='list-items'>
                  <li>Concerts</li>
                  <li>Engagements</li>
                  <li>Weddings</li>
                  <li>Social Media</li>
                  <li>Business</li>
                  <li>Headshots</li>
                  <li>Behind the Scenes</li>
                  <li>Travel</li>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Events</h5>
                <div className='list-items'>
                  <li>Concerts</li>
                  <li>Corporate Events</li>
                  <li>Weddings</li>
                  <li>Birthdays</li>
                  <li>Interviews</li>
                  <li>Grand Openings</li>
                  <li>Sporting Events</li>
                  <li>Meetings</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='meet-the-team'>
        <div className='service-title'>
          <h1 className='services-header'>Meet the Team</h1>
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
          <h1 className='services-header'>Our Process</h1>
        </div>
      </div>
      <div className='brands-section'>
        <div className='service-title'>
          <h1 className='services-header'>Brands That Trust Us</h1>
        </div>
      </div>
    </section>
  );
}
