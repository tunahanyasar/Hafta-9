import { useEffect, useState } from 'react';
import logoImg from '../assets/img/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navbar Scroll yapınca bg değişmesi
  const headerScrolled = () => {
    const navbar = document.querySelector(".navbar-container");
    const scrollValue = window.scrollY;
    if (scrollValue < 700) {
      navbar.classList.remove('bgClass');
    } else {
      navbar.classList.add('bgClass');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerScrolled);
    headerScrolled(); // Initial check on load
    
    return () => {
      window.removeEventListener('scroll', headerScrolled);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Nav - Start */}
      <nav className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        {/* Responsive için Nav */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars menu-hmbgr"></i>
        </div>
        {/* Navbar items */}
        <div className={`nav-items ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="#hero" className="scrollto" onClick={toggleMenu}>Home</a>
          <a href="#courses" className="scrollto" onClick={toggleMenu}>Classes</a>
          <a href="#trainers" className="scrollto" onClick={toggleMenu}>Trainer</a>
          <a href="#comments" className="scrollto" onClick={toggleMenu}>Review</a>
          <a href="#contact" className="scrollto" onClick={toggleMenu}>Contact</a>
          <button>
            <a href="#joinus" onClick={toggleMenu}><span>JOIN US</span></a>
          </button>
        </div>
      </nav>
      {/* Nav - End */}
    </header>
  );
};

export default Navbar; 