import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import './Section.scss';
import arrowIcon from '/images/arrowIcon.svg';

type Props = {
    title: string,
}

const Section = ({title}: Props) => {
  return (
    <div className='section'>
        <span className="section__title">{title}</span>
        <a href="#" className="section__link">Zobacz wszystkie <img src={arrowIcon} alt="arrow icon"/></a>
        <CarouselContainer/>
    </div>
  )
}

export default Section