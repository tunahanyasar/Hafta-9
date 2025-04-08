import { useState, useEffect, useRef } from 'react';
import bmiIndexImg from '../assets/img/bmi-index.jpg';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [trianglePosition, setTrianglePosition] = useState('5%');
  const triangleRef = useRef(null);

  // BMI calculation logic
  useEffect(() => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100; // cm to meter
      const weightInKg = parseFloat(weight);
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      
      let percentage;
      
      // BMI'ye göre üçgenin yüzdelik konumunu belirleme
      if (bmi < 18.5) {
        percentage = 7 + (bmi - 13.5) * (16 / 5);
      } else if (bmi < 25) {
        percentage = 23 + (bmi - 18.5) * (16 / 7);
      } else {
        percentage = 40 + (bmi - 24.5) * (16 / 5);
      }
      
      // Yüzdelik değeri belirli sınırlar içinde tut
      if (percentage >= 6 && percentage <= 88) {
        setTrianglePosition(`${percentage}%`);
      } else if (percentage < 6) {
        setTrianglePosition('6%');
      } else if (percentage > 88) {
        setTrianglePosition('88%');
      }
    }
  }, [height, weight]);

  return (
    <section className="bmi-sec">
      <div className="bmi-div">
        <h1>BMI Calculator</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. <br />
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        {/* BMI input kısmı */}
        <div className="align-inputs">
          <div>
            <input 
              id="height" 
              type="text" 
              placeholder="Your Height" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span>cm</span>
          </div>
          <div>
            <input 
              id="weight" 
              type="text" 
              placeholder="Your Weight" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <span>kg</span>
          </div>
        </div>
      </div>
      {/* BMI Sonuç kısmı */}
      <div className="img-div">
        <h4>Your BMI</h4>
        <div className="img-container">
          <img src={bmiIndexImg} alt="BMI Scale" />
          <span 
            ref={triangleRef}
            className="material-symbols-outlined material-triangle"
            style={{ left: trianglePosition }}
          >
            change_history
          </span>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator; 