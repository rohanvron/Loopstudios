import React from 'react';
import Header from './sections/Header';
import Home from './sections/Home';
import VR from './sections/VRsection';
import Creations from './sections/Creations';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <VR />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;