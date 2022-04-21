import React from 'react';
import cool from './img/cool.png';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <div className='header-box'>
        <img className='logo' alt='logo' src={cool}></img>
        <Menu></Menu>
    </div>
  )
}
