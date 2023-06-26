import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src="https://i.imgur.com/KxfWH9J.png"/>
            <p className="pink-text">FLOWERBOX / EST. 2019</p>
            <ion-icon name="logo-twitter"></ion-icon>
        </div>
        <div className="customer-service">
            <p className='blue-text'>customer service</p>
            <p className="text">SATISFACTION COMMITMENT</p>
            <p className="text">DELIVERY POLICIES</p>
            <p className="text">CANCELLATIONS</p>
            <p className="text">RETURN POLICY</p>
        </div>
        <div className="flowerbox">
            <p className='blue-text'>flowerbox</p>
            <p className="text">TERMS OF SERVICE</p>
            <p className="text">PRIVACY POLICIES</p>
            <p className="text">CAREER OPPORTUNITIES</p>
            <p className="text">MORE INFORMATION</p> 
        </div>
    </footer>
  )
}