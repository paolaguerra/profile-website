import React from 'react'
import { About } from './About'
import { RightColumn } from './RightColumn'
import { WebSites } from './WebSites'

export const Profile = () => {
  return (
    <div className='contenedor-profile'>
        <WebSites></WebSites>
        <About></About>
        <RightColumn></RightColumn>
    </div>
  )
}
