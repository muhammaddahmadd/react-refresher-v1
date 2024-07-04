import React from 'react';
import './App.css';
// import Pizza from "../src/components/Pizza"
import Header from './components/Header';
// import Menu from './components/Menu';
import Footer from "./components/Footer"
import Pizza from './components/Pizza';
function App() {
  return <div className='main-div container' >
    <Header />
    <Pizza />
    <Footer />
  </div>
}

export default App;
