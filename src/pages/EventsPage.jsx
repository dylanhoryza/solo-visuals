import '../styles/eventpage.css'
import YouTubeVideo from '../components/YoutubeVideo'
import React, { useEffect } from 'react';

export default function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='video-container'>
      <div className='video-title-section-2'>
      <h1 className='events-title'>EVENT <span>RECAPS</span></h1>
      </div>
      <div className='row video-boxes'>
      <YouTubeVideo videoId="FvGffrEfq8I" />
      <YouTubeVideo videoId="Sc-l3p14u34" />
      <YouTubeVideo videoId="v7uKaEkfYWw" />
      <YouTubeVideo videoId="iGOjBufsYyE" />
      <YouTubeVideo videoId="qgBr4oEupK4" />
      <YouTubeVideo videoId="7KyzTxkYn7M" />
      <YouTubeVideo videoId="bV_-_CBqZgI" />
      <YouTubeVideo videoId="PB0Rfo3pwyg" />
      <YouTubeVideo videoId="EWxYzWfAjng" />
      <YouTubeVideo videoId="ZfkNJiGdCU8" />
      <YouTubeVideo videoId="zBxgi0O4vYE" />
      <YouTubeVideo videoId="YUij_tf81JE" />
      <YouTubeVideo videoId="ncpe9_90asM" />
      <YouTubeVideo videoId="wrsC4zdGeuU" />
      </div>
      
    </div>
  )
}