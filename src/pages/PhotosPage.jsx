import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import '../styles/photopage.css'
import MoxasImage from '../photos/moxasportrait.jpg'
import BabyPic1 from '../photos/babyportrait.jpg'
import BabyPic2 from '../photos/babyportrait2.jpg'
import CaliPhoto from '../photos/cali1.jpg'
import CameraPhoto from '../photos/camerashot.jpg'
import ChristianImage from '../photos/christianportrait.jpg'
import CloudsPhoto from '../photos/clouds.jpg'
import MarkPhoto from '../photos/markportrait.jpg'
import Maternity1 from '../photos/maternity1.jpg'
import Maternity2 from '../photos/maternity2.jpg'
import Maternity3 from '../photos/maternity3.jpg'
import Maternity4 from '../photos/maternity4.jpg'
import NewYorkPhoto from '../photos/nyc1.jpg'
import TulumPhoto1 from '../photos/tulum1.jpg'
import TulumPhoto2 from '../photos/tulum2.jpg'

export default function PhotosPage() {
  const cards = [
    MoxasImage,
    BabyPic1,
    BabyPic2,
    CaliPhoto,
    CameraPhoto,
    ChristianImage,
    CloudsPhoto,
    MarkPhoto,
    Maternity1,
    Maternity2,
    Maternity3,
    Maternity4,
    NewYorkPhoto,
    TulumPhoto1,
    TulumPhoto2
    
  ];
  
  const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });
  
  const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
  
  const trans = (r, s) =>
    `perspective(1500px) rotateX(15deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
  
  function Deck() {
    const [gone] = useState(() => new Set());
    const [props, api] = useSprings(cards.length, i => ({
      ...to(i),
      from: from(i),
    }));
  
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start(i => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start(i => to(i));
        }, 600);
    });
  
    return (
      
      <div className='photo-section'>
        <h1 className='photo-header'>PHOTOS</h1>
        <h3 className='photo-description'>Swipe to see some of our <span>favorite photos!</span></h3>
        <div className='photo-container'>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className="deck" key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
              }}
            />
          </animated.div>
        ))}
        </div>
        <div className='photo-btn'>
        <button className='view-photos-btn' onClick={() => window.open("https://unsplash.com/@solovisuals", "_blank")}>
            View More Photos
        </button>
        </div>
       
      </div>
    );
  }

  return <Deck />;
}
