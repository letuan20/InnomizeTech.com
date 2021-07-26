import React from 'react';
import starIcon from '../../assets/images/star-icon.png';
import team1 from '../../assets/images/team/team1.jpg';
import team2 from '../../assets/images/team/team2.jpg';
import team3 from '../../assets/images/team/team3.jpg';
import team4 from '../../assets/images/team/team4.jpg';

const TeamMember = () => {
  return (
    <section className="scientist-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="team" />
            Team Members
          </span>
          <h2>Our Awesome Team</h2>
          <p>
            We are a team of professional, passionate, enthusiastic and talented
            individuals with one goal - to bring more value to your business by
            delivering the tools you need to keep your business moving in the
            right direction.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team1} alt="team" />
              </div>
              <div className="content">
                <h3>Hoang Le</h3>
                <span>Co-Founder, CEO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team2} alt="team" />
              </div>
              <div className="content">
                <h3>Kirk Borne</h3>
                <span>UX/UI Designer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team3} alt="team" />
              </div>
              <div className="content">
                <h3>Carla Gentry</h3>
                <span>Web Developer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team4} alt="team" />
              </div>
              <div className="content">
                <h3>Marie Curie</h3>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
