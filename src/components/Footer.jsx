import React from "react";
import FacebookIcon from '../assets/Facebook_Logo_Secondary.png'
import InstaIcon from '../assets/Instagram_Glyph_White.png'
import YoutubeIcon from '../assets/youtube_social_squircle_dark.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/beauhoryza/" target="_blank" rel="noopener noreferrer">
          <img src={InstaIcon} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@SoloVisualsAZ" target="_blank" rel="noopener noreferrer">
          <img src={YoutubeIcon} alt="Youtube" />
        </a>
        <a href="https://www.facebook.com/beau.horyza/" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
      </div>
      
    </div>
  );
}
export default Footer;