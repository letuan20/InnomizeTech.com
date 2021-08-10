import React from 'react';

import activity from '../../assets/images/career/career-about-us.png';

const AboutUsContent = () => {
  return (
    <section className="about-area-career">
     <div className="container">
        <div className="section-title">
            <h2>About Us</h2>
            <p>
                Our mission is to create awesome products that will make your everyday life easier. 
                Our experienced engineering and development team are committed, passionate, and continually 
                challenge themselves on the advancements and changes of the technologies we utilize to deliver the most up-to-date and innovative solutions.
            </p>
            <p>
                We provide optimized IT solutions for your business. At InnomizeTech, we believe that people are our company’s 
                greatest asset as we continuously innovate to create a supportive environment that will accommodate our employee’s 
                personal and professional development – an environment that is designed to foster growth that benefits both our people 
                and our clients’ success.   
            </p>
        </div>
        <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="img-activity">
          </div>
          <img src={activity} />
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
