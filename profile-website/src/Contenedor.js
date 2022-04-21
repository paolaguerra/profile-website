import React from 'react'
import { Header } from './Header';
import "./index.css";
import { ProfileMainBox } from './ProfileMainBox';

export const Contenedor = () => {
  return (
    <div className='contenedor-principal'>
        <Header></Header>
        <ProfileMainBox></ProfileMainBox>
    </div>
  )
}
