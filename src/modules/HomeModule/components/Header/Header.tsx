import React from 'react';
import './Header.scss';
import netflixLogo from '/images/NETFLIX.png';


const Header = () => {
  return (
    <header className='header'><img src={netflixLogo}/></header>
  )
}

export default Header