import React from 'react';
import AnhHoang from '../../assets/images/team/AnhHoang.png';
import HiepDinh from '../../assets/images/team/HiepDinh.png';
import HoangLe from '../../assets/images/team/HoangLe.png';
import KhoaTran from '../../assets/images/team/KhoaTran.png';
import PhongTran from '../../assets/images/team/PhongTran.png';
import TuanNguyen from '../../assets/images/team/TuanNguyen.png';

const TeamMember = () => {
  return (
    <section className="scientist-area">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Team</h2>
          <p>
            We are a team of professional, passionate, enthusiastic and talented
            individuals with one goal - to bring more value to your business by
            delivering the tools you need to keep your business moving in the
            right direction.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={HoangLe} alt="team" />
              </div>
              <div className="content">
                <h3>Hoang Le</h3>
                <p>Co-Founder, CEO</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={PhongTran} alt="team" />
              </div>
              <div className="content">
                <h3>Phong Tran</h3>
                <p>Co-Founder, COO</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={KhoaTran} alt="team" />
              </div>
              <div className="content">
                <h3>Khoa Tran</h3>
                <p>Project Manager</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={HiepDinh} alt="team" />
              </div>
              <div className="content">
                <h3>Hiep Dinh</h3>
                <p>Technical Lead</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={TuanNguyen} alt="team" />
              </div>
              <div className="content">
                <h3>Tuan Nguyen</h3>
                <p>Technical Lead</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={AnhHoang} alt="team" />
              </div>
              <div className="content">
                <h3>Anh Hoang</h3>
                <p>Automation Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
