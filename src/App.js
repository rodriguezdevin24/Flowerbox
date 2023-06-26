import React from 'react';
import NavBar from './components/NavBar';
import LargeImage from './components/LargeImage';
import FlowerProducts from './components/FlowerProducts';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="grid-container">
        <NavBar/>
        <LargeImage/>
        <FlowerProducts/>
        <Footer/>
    </div>
  )
}