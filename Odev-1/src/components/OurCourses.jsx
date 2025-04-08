import { useState, useEffect } from 'react';
import yogaImg from '../assets/img/yoga.jpg';
import groupImg from '../assets/img/group.webp';
import soloImg from '../assets/img/solo.jpg';
import stretchImg from '../assets/img/stret.webp';

const OurCourses = () => {
  // Kurs bilgilerini obje şeklinde tut
  const classData = {
    yoga: {
      title: "Why are your Yoga?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis quam accusantium necessitatibus! Autem laudantium commodi recusandae molestiae voluptatum quidem assumenda, ratione in ullam minima et iure earum quod fugiat.",
      title2: "Schedule:",
      program: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm",
      ],
      img: yogaImg,
    },
    group: {
      title: "Why are your Group?",
      desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      title2: "Schedule:",
      program: [
        "Saturday-Sunday: 9:00am - 11:00am",
        "Monday-Tuesday: 12:00pm - 14:00pm",
        "Wednesday-Friday: 5:00pm - 7:00pm",
      ],
      img: groupImg,
    },
    solo: {
      title: "Why are your Solo?",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      title2: "Schedule:",
      program: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 9:00am - 11:00pm",
        "Wednesday-Friday: 2:00pm - 4:00pm",
      ],
      img: soloImg,
    },
    stretch: {
      title: "Why are your Stretch?",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      title2: "Schedule:",
      program: [
        "Saturday-Sunday: 11:00am - 14:00pm",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 5:00pm - 7:00pm",
      ],
      img: stretchImg,
    },
  };

  // State to manage active class data
  const [activeClass, setActiveClass] = useState('yoga');
  const [animate, setAnimate] = useState(false);

  // Handle the button click to switch courses
  const handleClassClick = (courseType) => {
    setAnimate(true);
    setActiveClass(courseType);
    
    // Remove animation class after animation completes
    setTimeout(() => {
      setAnimate(false);
    }, 300);
  };

  // Current active class data
  const currentClassData = classData[activeClass];

  return (
    <section className="our-courses" id="courses">
      <div className="our-courses-div">
        <div className="background-shape"></div>
        <h2>OUR CLASSES</h2>
        <div className="heading-bottom-line"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. It has roots
          in a piece of classical at <br />
          Hampden-Syndey Collage.
        </p>
        
        <div className="our-courses-buttons">
          <button id="yoga" onClick={() => handleClassClick('yoga')}>Yoga</button>
          <button id="group" onClick={() => handleClassClick('group')}>Group</button>
          <button id="solo" onClick={() => handleClassClick('solo')}>Solo</button>
          <button id="stretch" onClick={() => handleClassClick('stretch')}>Stretching</button>
        </div>
        
        <div className={`our-courses-contents ${animate ? 'class-content' : ''}`} id="class-content">
          <div>
            <h6>{currentClassData.title}</h6>
            <p>{currentClassData.desc}</p>
            <h6>{currentClassData.title2}</h6>
            <p>{currentClassData.program[0]}</p>
            <p>{currentClassData.program[1]}</p>
            <p>{currentClassData.program[2]}</p>
          </div>
          <img src={currentClassData.img} alt={activeClass} />
        </div>
      </div>
    </section>
  );
};

export default OurCourses; 