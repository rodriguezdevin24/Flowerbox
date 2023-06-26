import React from 'react'
import NavBarItems from './NavBarItems'

export default function 
() {
  return (
    <nav className="nav">
        <NavBarItems nav="About" cls="about"/>
        <NavBarItems nav="Collections" cls="collections"/>
        <NavBarItems nav="Delivery Service" cls="delivery-service"/>
        <NavBarItems nav="Location" cls="location"/>
        <NavBarItems nav="Contact Us" cls="contact-us"/>
    </nav>
  )
}