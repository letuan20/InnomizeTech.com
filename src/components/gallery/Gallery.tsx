import React from 'react';
import Loadable from '@loadable/component';
import activity1 from '../../assets/images/gallery/activity-1.jpg';
import activity2 from '../../assets/images/gallery/activity-2.jpg';
import activity3 from '../../assets/images/gallery/activity-3.jpg';
import activity4 from '../../assets/images/gallery/activity-4.jpg';
import activity5 from '../../assets/images/gallery/activity-5.jpg';
import $ from 'jquery';

const OwlCarousel = Loadable(() => import('react-owl-carousel3'));
// loop: true,
// nav: true,
// dots: false,
// margin: 30,
// smartSpeed: 600,
// fluidSpeed: false,
// autoplayHoverPause: true,
// autoplay: true,
// navText: [
//   "<i class='flaticon-left-1'></i>",
//   "<i class='flaticon-right-1'></i>",
// ],
// responsive: {
//   0: {
//     items: 1,
//   },
//   768: {
//     items: 1,
//   },
//   992: {
//     items: 1,
//   },
// },

const options = {
  center: true,
  loop: true,
  nav: true,
  items: 5,
  dots: false,
  // smartSpeed: 600,
  // fluidSpeed: false,
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
      items: 5,
    },
    992: {
      items: 5,
    },
  }
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
          <h2>We Word Hard, And Play Even Harder</h2>
          <p></p>
        </div>
        {display ? (
          <OwlCarousel {...options}  className="owl-carousel"
          >
            <div className="single-testimonials-item">
                <img width={188} height={188} src={activity1} alt="testimonial" />
            </div>
            <div className="single-testimonials-item">
                <img width={188} height={188} src={activity2} alt="testimonial" />
            </div>
            <div className="single-testimonials-item">
                <img width={188} height={188} src={activity3} alt="testimonial" />
            </div>
            <div className="single-testimonials-item">
                <img width={188} height={188} src={activity4} alt="testimonial" />
            </div>
            <div className="single-testimonials-item">
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
export default Testimonials;

// import React, { useState } from 'react';
// import Slider from 'react-slick';

// import activity1 from '../../assets/images/gallery/activity-1.jpg';
// import activity2 from '../../assets/images/gallery/activity-2.jpg';
// import activity3 from '../../assets/images/gallery/activity-3.jpg';
// import activity4 from '../../assets/images/gallery/activity-4.jpg';
// import activity5 from '../../assets/images/gallery/activity-5.jpg';

// const IMAGES = [
//   {
//     id: 1,
//     src: activity1,
//     alt: 'Placeholder image',
//   },
//   {
//     id: 2,
//     src: activity4,
//     alt: 'Placeholder image',
//   },
//   {
//     id: 3,
//     src: activity3,
//     alt: 'Placeholder image',
//   },
//   {
//     id: 4,
//     src: activity4,
//     alt: 'Placeholder image',
//   },
//   {
//     id: 5,
//     src: activity5,
//     alt: 'Placeholder image',
//   },
//   {
//     id: 6,
//     src: activity1,
//     alt: 'Placeholder image',
//   },
// ];

// const NextArrow = ({ onClick }) => {
//   return <div className="nextArrow" onClick={onClick}></div>;
// };

// const PrevArrow = ({ onClick }) => {
//   return <div className="prevArrow" onClick={onClick}></div>;
// };

// const ImageSlider = () => {
//   const [imageIndex, setImageIndex] = useState(0);

//   const settings = {
//     className: 'center ',
//     centerMode: true,
//     infinite: true,
//     dots: false,
//     speed: 300,
//     slidesToShow: 5,
//     centerPadding: '60',
//     swipeToSlide: true,
//     focusOnSelect: true,
//     nextArrow: <NextArrow onClick />,
//     prevArrow: <PrevArrow onClick />,
//     beforeChange: (current, next) => setImageIndex(next),
//     responsive: [
//       {
//         breakpoint: 1490,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 820,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const templateImages = IMAGES.map((image, idx) => {
//     if (image !== null) {
//       return (
//         <div
//           className={idx === imageIndex ? 'activeSlide' : 'slide'}
//           key={image.id}
//         >
//             {<img src={image.src} alt={image.alt} />}
//         </div>
//       );
//     }
//     return null;
//   });

//   return <Slider {...settings}>{templateImages}</Slider>;
// };

// export default ImageSlider;
