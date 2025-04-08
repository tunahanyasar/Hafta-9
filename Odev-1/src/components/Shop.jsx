import purchase1Img from '../assets/img/purchase1.jpg';
import purchase2Img from '../assets/img/purchase2.jpg';
import purchase3Img from '../assets/img/purchase3.jpg';
import purchase4Img from '../assets/img/purchase4.jpg';

const Shop = () => {
  return (
    <section className="shop" id="shop">
      <div className="shop-container">
        <h2>PURCHASE FROM US</h2>
        <div className="heading-bottom-line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Hampden-Syndey Collage.
        </p>
        <div className="facilities-container">
          {/* Card #1 */}
          <div className="facilities-card">
            <img src={purchase1Img} alt="Kettlebell 5kg" />
            <div className="card-content">
              <h4>Kettlebell / 5kg</h4>
              <p><span>89,99$</span> / 59,99$</p>
              <div className="add-cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Add To Cart</p>
              </div>
            </div>
          </div>
          {/* Card #2 */}
          <div className="facilities-card">
            <img src={purchase2Img} alt="Treadmill" />
            <div className="card-content">
              <h4>Treadmill / 5kg</h4>
              <p><span>899,99$</span> / 599,99$</p>
              <div className="add-cart">
                <i className="fa-solid fa-cart-shopping"> </i>
                <p>Add To Cart</p>
              </div>
            </div>
          </div>
          {/* Card #3 */}
          <div className="facilities-card">
            <img src={purchase3Img} alt="Adjustable Dumbbell" />
            <div className="card-content">
              <h4>Adjustable Dumbbell</h4>
              <p><span>89,99$</span> / 59,99$</p>
              <div className="add-cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Add To Cart</p>
              </div>
            </div>
          </div>
          {/* Card #4 */}
          <div className="facilities-card">
            <img src={purchase4Img} alt="Kettlebell 3kg" />
            <div className="card-content">
              <h4>KettleBell / 3kg</h4>
              <p><span>89,99$</span> / 59,99$</p>
              <div className="add-cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Add To Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop; 