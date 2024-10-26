import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages //
import Home from './pages/Home';
import Error from './pages/Error404';
import Location from './pages/location';
import About from './pages/About';

// Composant //
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
