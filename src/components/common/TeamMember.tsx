import React from 'react';
import AnhHoang from '../../assets/images/team/Anh Hoang.png';
import AnhHoangGray from '../../assets/images/team/Anh Hoang-Grayscale.png';

import HiepDinh from '../../assets/images/team/Hiep Dinh.png';
import HiepDinhGray from '../../assets/images/team/Hiep Dinh-Grayscale.png';

import HoangLe from '../../assets/images/team/Hoang Le.png';
import HoangLeGray from '../../assets/images/team/Hoang Le-Grayscale.png';

import KhoaTran from '../../assets/images/team/Khoa Tran.png';
import KhoaTranGray from '../../assets/images/team/Khoa Tran-Grayscale.png';

import PhongTran from '../../assets/images/team/Phong Tran.png';
import PhongTranGray from '../../assets/images/team/Phong Tran-Grayscale.png';

import TuanNguyen from '../../assets/images/team/Tuan Nguyen.png';
import TuanNguyenGray from '../../assets/images/team/Tuan Nguyen-Grayscale.png';

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
            <div className="single-scientist-item-box top">
              <div className="image">
                <img src={HoangLe} className="image-normal" alt="team" />
                <img src={HoangLeGray} className="image-gray" />
              </div>
              <div className="content">
                <h3>Hoang Le</h3>
                <p>Co-Founder, CEO</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box top">
              <div className="image">
                <img src={PhongTran} className="image-normal" alt="team" />
                <img src={PhongTranGray} className="image-gray" />
              </div>
              <div className="content">
                <h3>Phong Tran</h3>
                <p>Co-Founder, COO</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-scientist-item-box top">
              <div className="image">
                <img src={KhoaTran} className="image-normal" alt="team" />
                <img src={KhoaTranGray} className="image-gray" />
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
                <img src={HiepDinh} className="image-normal" alt="team" />
                <img src={HiepDinhGray} className="image-gray" />
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
                <img src={TuanNguyen} className="image-normal" alt="team" />
                <img src={TuanNguyenGray} className="image-gray" />
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
                <img src={AnhHoang} className="image-normal" alt="team" />
                <img src={AnhHoangGray} className="image-gray" />
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
