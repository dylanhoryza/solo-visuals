import Navbar from "./Navbar";
import logoImage from '../assets/SOLOVblk.png'
import '../styles/header.css'
export default function Header() {
  return (
    <div>
      
      <div className="header-image">
      <img src={logoImage} alt="logo" className="logo-header"/>
      </div>
      <Navbar />
    </div>
  );
}