import React, { useEffect } from 'react';
import dailyschedule from './logo/dailyschedule.jpg';
import meeting from './logo/meeting.jpg';
import birthday from './logo/birthday.png';
import './Feature.css'; 

const Features = () => {
    useEffect(() => {
      const featureItems = document.querySelectorAll('.feature-item');
  
      const showOnScroll = () => {
        featureItems.forEach(item => {
          const slideInAt = (window.scrollY + window.innerHeight) - item.clientHeight / 2;
          const isHalfShown = slideInAt > item.offsetTop;
          if (isHalfShown) {
            item.classList.add('active');
          }
        });
      };
  
      window.addEventListener('scroll', showOnScroll);
  
      return () => {
        window.removeEventListener('scroll', showOnScroll);
      };
    }, []);

    return (
      <section id="features">
        <div className="feature-item">
          <div className="image">
            <img src={dailyschedule} alt="DS" />
          </div>
          <div className="text">
            <div className="content-box">
              <h2>Important Deadlines</h2>
              <p className="justified-paragraph">
                Within the whirlwind of life, missed deadlines can feel like lost opportunities. Our tool ensures you stay ahead, transforming hectic schedules into seamless triumphs. Embrace productivity, embrace success—never miss a beat, never miss a deadline.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-item">
          <div className="text">
            <div className="content-box">
              <h2>A great way to plan for meetings</h2>
              <p className="justified-paragraph">
                Meetings are the nexus of ideas, where collaboration fuels innovation. With our tool, your meetings become streamlined symphonies, orchestrating thoughts into actionable plans. Don't miss a beat—make each meeting count, each interaction a catalyst for progress.
              </p>
            </div>
          </div>
          <div className="image">
            <img src={meeting} alt="MEET" />
          </div>
        </div>
        <div className="feature-item">
          <div className="image">
            <img src={birthday} alt="birthday" style={{ maxWidth: '800px', height: 'auto' }} /> {/* Decreased image size */}
          </div>
          <div className="text" style={{ textAlign: 'right' }}>
            <div className="content-box">
              <h2>Birthdays, anniversaries, and other important dates</h2>
              <p className="justified-paragraph">
                Birthdays mark the tapestry of our lives, moments to cherish and celebrate. Our platform ensures each special day is remembered, each milestone treasured. Never miss a chance to spread joy, make memories, and honor the ones who color your life.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;