import { useEffect, useState } from 'react';
import './App.css';
import Aboutme from "./components/Aboutme/About";
import Contact from './components/Contact/Contact';
import Extra from './components/ExtraCurricular/ExtraCurricular';
import Faq from "./components/Faq/Faq";
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Loader from './components/Loader/Loader';
import Project from './components/Projects/Projects';
import Technical from './components/Technical/Technical';
import Timeline from "./components/Timeline/Timeline";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />  // Show loader while isLoading is true
      ) : (
        <div className="app">
          <Header />
          <Hero />
          <Aboutme />
          <Timeline />
          <Technical />
          <Project />
          <Extra />
          <Faq />
          <Contact />
          <Footer />
          
        </div>
      )}
    </>
  );
}

export default App;