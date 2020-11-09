import React, { Component } from 'react';
import Slider from 'react-slick';

class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <section id="testimonials" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h2>Testimonials</h2>
          </header>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Slider {...settings}>
                <div className="item">
                  <img
                    src="assets/img/ben.jpg"
                    className="testimonial-img"
                    alt="Ben Elliott"
                  />
                  <h3>Ben Elliott</h3>
                  <h4>Chief Technology Officer of The Coral Edge</h4>
                  <p>
                    InnomizeTech has been our exclusive development team for
                    three years. Lead by highly skilled and talented engineers,
                    they have worked alongside us to design, deliver and support
                    quality products. Partnering with them to build a team that
                    consistently strengthens and improves their technical skill
                    set, has helped us produce innovative solutions that exceed
                    our client’s expectations.
                  </p>
                </div>

                <div className="item">
                  <img
                    src="assets/img/kirsti.jpg"
                    className="testimonial-img"
                    alt="Kirsti Elliott"
                  />
                  <h3>Kirsti Elliott</h3>
                  <h4>Chief Executive Officer of The Coral Edge</h4>
                  <p>
                    We work in a fast-paced industry where rapid turnaround of
                    quality solutions is a must. InnomizeTech always steps up to
                    the plate, putting in the extra time and effort to ensure we
                    deliver on time. Their ability to adapt to the needs of each
                    project is what makes them a critical part of our delivery
                    team.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
