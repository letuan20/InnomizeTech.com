import React from 'react';
import Loadable from '@loadable/component';
import client1 from '../../assets/images/testimonials/kirsti.jpg';
import client2 from '../../assets/images/testimonials/ray.png';
import client3 from '../../assets/images/testimonials/ben.jpg';

const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: true,
  dots: false,
  // autoplayHoverPause: true,
  // autoplay: true,
  navText: [
    "<i class='flaticon-left-1'></i>",
    "<i class='flaticon-right-1'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
  },
};
const Testimonials = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
    /* tslint:disable:align */
  }, []);
  return (
    <div id="sec-testimonials" className="testimonials-area pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Testimonials</span>
          <h2>What Our Clients are Saying?</h2>
          <p></p>
        </div>
        {display ? (
          <OwlCarousel
            className="testimonials-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-testimonials-item">
              <div className="client-info">
                <img width={187} height={187} src={client1} alt="testimonial" />
              </div>
              <div className="title">
                <h3>Kirsti Elliott</h3>
                <h4>CEO at The Coral Edge</h4>
                <p>
                  We work in a fast-paced industry where rapid turnaround of
                  quality solutions is a must. InnomizeTech always steps up to
                  the plate, putting in the extra time and effort to ensure we
                  deliver on time. Their ability to adapt to the needs of each
                  project is what makes them a critical part of our delivery
                  team.
                </p>
              </div>
            </div>
            <div className="single-testimonials-item">
              <div className="client-info">
                <img width={187} height={187} src={client2} alt="testimonial" />
              </div>
              <div className="title">
                <h3>Ray Antonino</h3>
                <h4>CEO at Permits.com</h4>
                <p>
                  Our experience partnering with Innomize has been great. The
                  team does an excellent job of aligning expectations and they
                  are attentive to our outreach throughout the build. What
                  stands out for me most is a time that we needed significant
                  changes made (our fault) within two days of demoing a Fortune
                  40. The team at Innomize jumped on calls at all hours of the
                  night (their time) and worked tirelessly to get us ready. They
                  get what it means to be partners in success and we are
                  grateful to have them as an extension of our team.
                </p>
              </div>
            </div>
            <div className="single-testimonials-item">
              <div className="client-info">
                <img width={187} height={187} src={client3} alt="testimonial" />
              </div>
              <div className="title">
                <h3>Ben Elliott</h3>
                <h4>CTO at The Coral Edge</h4>
                <p>
                  InnomizeTech has been our exclusive development team for three
                  years. Lead by highly skilled and talented engineers, they
                  have worked alongside us to design, deliver and support
                  quality products. Partnering with them to build a team that
                  consistently strengthens and improves their technical skill
                  set, has helped us produce innovative solutions that exceed
                  our client’s expectations.
                </p>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default Testimonials;
