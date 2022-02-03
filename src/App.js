import './App.css';
import React, { useState } from 'react';
import Navtabs from './components/NavTabs/Navtabs';
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home/Home'; //
import Projects from './components/pages/Projects/Projects';
// import Contact from './pages/Contact';
// import Extra from './pages/Extra';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />
    }
    if (currentPage === 'Projects') {
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
