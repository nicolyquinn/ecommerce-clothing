import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from "./Routes";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes />

      <Footer />

    </BrowserRouter>  
  );
};

export default App;
