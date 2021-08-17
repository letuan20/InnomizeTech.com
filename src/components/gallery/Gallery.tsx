import React from 'react';
import Loadable from '@loadable/component';
import activity1 from '../../assets/images/gallery/activity-1.jpg';
import activity2 from '../../assets/images/gallery/activity-2.jpg';
import activity3 from '../../assets/images/gallery/activity-3.jpg';
import activity4 from '../../assets/images/gallery/activity-4.jpg';
import activity5 from '../../assets/images/gallery/activity-5.jpg';

const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
  center: true,
  loop: true,
  nav: true,
  items: 5,
  dots: false,
  smartSpeed: 600,
  fluidSpeed: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='flaticon-left-1'></i>",
    "<i class='flaticon-right-1'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
  }
  };

const Gallery = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
    /* tslint:disable:align */
  }, []);

  return (
    <div id="sec-testimonials" className="gallery-area">
      <div className="container">
        <div className="section-title">
          <h2>We Word Hard, And Play Even Harder</h2>
        </div>
        {display ? (
          <OwlCarousel {...options}  className="owl-carousel"
          >
            <div className="single-gallery">
                <img width={188} height={188} src={activity1} alt="testimonial" />
            </div>
            <div className="single-gallery">
                <img width={188} height={188} src={activity2} alt="testimonial" />
            </div>
            <div className="single-gallery">
                <img width={188} height={188} src={activity3} alt="testimonial" />
            </div>
            <div className="single-gallery">
                <img width={188} height={188} src={activity4} alt="testimonial" />
            </div>
            <div className="single-gallery">
                <img width={188} height={188} src={activity5} alt="testimonial" />
            </div>
          </OwlCarousel>

        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default Gallery;
