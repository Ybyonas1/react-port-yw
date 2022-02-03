import './App.css';
import React, { useState } from 'react';
import Navtabs from './components/Navtabs';
import Footer from './components/Footer'
// import Contact from './pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
// import Extra from './pages/Extra';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />
    }
    if (currentPage === 'Project') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      // return <Contact />;
    }
    // return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navtabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <main id="mainContent"> */}
      {renderPage()}
      {/* <main /> */}
      <Footer />
    </>
  );
}

export default App;
