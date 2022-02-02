import './App.css';
import Navtabs from './components/Navtabs';
import Footer from './components/Footer'
// import Contact from './pages/Contact';
// import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
// import Extra from './pages/Extra';

function App() {
  return (
    <>
      <Navtabs />
      {/* <Home /> */}
      <Projects />
      <Footer />
    </>

  );
}

export default App;
