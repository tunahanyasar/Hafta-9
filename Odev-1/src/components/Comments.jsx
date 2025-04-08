import client1Img from '../assets/img/client1.jpg';
import client2Img from '../assets/img/client2.jpg';

const Comments = () => {
  return (
    <section className="comments" id="comments">
      <div className="comments-container">
        <h2>REVIEW CLIENT</h2>
        <div className="heading-bottom-line"></div>
        <p className="section-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Hampden-Syndey Collage.
        </p>
        {/* Müşteri # 1 */}
        <div className="client-container">
          <div className="comments">
            <div className="client">
              <img src={client1Img} alt="Diet Expert" />
              <div className="client-content">
                <span>Diet Expert</span>
                <p>CFO</p>
              </div>
            </div>
            <div className="comment-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                accusantium eos beatae aut sapiente soluta modi qui amet error.
                Tempora. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          {/* Müşteri # 2 */}
          <div className="comments">
            <div className="client">
              <img src={client2Img} alt="Cardio Trainer" />
              <div className="client-content">
                <span>Cardio Trainer</span>
                <p>CEO</p>
              </div>
            </div>
            <div className="comment-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                ex optio nemo qui! Necessitatibus quos nostrum ea molestiae
                doloribus quas. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments; 