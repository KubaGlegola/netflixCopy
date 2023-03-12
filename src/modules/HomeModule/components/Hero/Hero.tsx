import React from 'react';
import './Hero.scss';
import wednesday from '/images/wednesday.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__content'>
            <p className="hero__rank"><span className='hero__rankIcon'><span>top </span><span>10</span></span>Nr 5 wśród seriali dzisiaj</p>
            <img src={wednesday} className='hero__title'/>
            <p className='hero__description'>
                Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i wrogów w Akademii Nevermore.
            </p>
        </div>
    </div>
  )
}

export default Hero