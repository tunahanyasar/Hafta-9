import logoImg from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta
          omnis quaerat! Esse cum eos odit, nisi aliquam qui iusto laudantium
          temporibus iste omnis dolores ducimus nesciunt consequatur consectetur
          rerum.
        </p>
        <div className="footer-elements">
          <div className="info">
            <h3>Information</h3>
            <a href="#hero">About Us</a>
            <a href="#courses">Classes</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="links">
            <h3>Helpful Links</h3>
            <a href="#">Services</a>
            <a href="#">Supports</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 