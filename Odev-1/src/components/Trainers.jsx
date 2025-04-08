import trainer1Img from '../assets/img/trainer1.jpg';
import trainer2Img from '../assets/img/trainer2.jpg';
import trainer3Img from '../assets/img/trainer3.jpg';

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
      <div className="trainers-global">
        <h2>OUR BEST TRAINERS</h2>
        <div className="heading-bottom-line"></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis, nostrum?
          <br />Hampden-Syndey Collage.
        </p>
        <div className="trainer-container">
          {/* Trainer #1 */}
          <div className="trainer-each">
            <span className="frame-top"></span>
            <img src={trainer1Img} alt="Trainer Marry Jane" />
            <span className="frame-bot"></span>
            <div className="trainer-info box-effect">
              <h4>Marry Jane</h4>
              <p>Pilates Trainer</p>
            </div>
          </div>
          {/* Trainer #2 */}
          <div className="trainer-each">
            <span className="frame-top"></span>
            <img src={trainer2Img} alt="Trainer John Doe" />
            <span className="frame-bot"></span>
            <div className="trainer-info box-effect">
              <h4>John Doe</h4>
              <p>Body Trainer</p>
            </div>
          </div>
          {/* Trainer #3 */}
          <div className="trainer-each">
            <span className="frame-top"></span>
            <img src={trainer3Img} alt="Trainer Jane Doe" />
            <span className="frame-bot"></span>
            <div className="trainer-info box-effect">
              <h4>Jane Doe</h4>
              <p>Cardio Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers; 