import { useEffect } from 'react'
import './App.css'
import './styles/main.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseInfo from './components/CourseInfo'
import OurCourses from './components/OurCourses'
import BMICalculator from './components/BMICalculator'
import Trainers from './components/Trainers'
import Shop from './components/Shop'
import Comments from './components/Comments'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Smooth Scroll functionality
  useEffect(() => {
    const links = document.getElementsByClassName('scrollto');
    
    const focusSection = function (event) {
      event.preventDefault();
      const id = event.target.hash.slice(1);
      const section = document.getElementById(id);
      
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    };
    
    for (const link of links) {
      link.addEventListener('click', focusSection);
    }
    
    return () => {
      for (const link of links) {
        link.removeEventListener('click', focusSection);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CourseInfo />
      <OurCourses />
      <BMICalculator />
      <Trainers />
      <Shop />
      <Comments />
      <Contact />
      <Footer />
    </>
  )
}

export default App
