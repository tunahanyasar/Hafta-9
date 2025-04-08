import heroManImg from '../assets/img/hero-man.jpg';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroManImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="hero" id="hero" style={heroStyle}>
      <div className="hero-container">
        <div className="container">
          <h6 className="hero-title"><p>POWERFULL</p></h6>
          <h1>
            Group <br />
            Practice<br />With Trainer
          </h1>
          <br />
          <p className="hero-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus odit aut iste. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Saepe tempora nisi tenetur nesciunt
            vero itaque hic voluptate dolorum delectus minima. Lorem ipsum dolor
            sit amet.
          </p>
          <div className="hero-buttons">
            <button className="sign-up">Sign Up</button>
            <button className="details">Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 