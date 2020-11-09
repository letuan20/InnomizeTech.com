import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div id="home-cover">
        <div className="big-video-wrap">
          <img src="img/intro/group-of-people-sitting-indoors-3184345.jpg" />
        </div>
        <div className="builder_row_cover"></div>
        <section className="intro-container">
          <div className="container">
            <div className="intro-info">
              <h1>
                We provide
                <br />
                <span>optimized IT solutions </span>
                <br />
                for your business!
              </h1>
            </div>
          </div>
        </section>
      </div>

      // <section id="intro" className="clearfix">
      //   <div className="container">
      //     <div className="intro-img">
      //       <img
      //         src="img/intro-img-new.svg"
      //         alt="Intro image"
      //         className="img-fluid"
      //       />
      //     </div>
      //     <div className="intro-info">
      //       <h1>
      //         We provide
      //         <br />
      //         <span>optimized IT solutions</span>
      //         <br />
      //         for your business!
      //       </h1>
      //       <div>
      //         <a href="#about" className="btn-get-started scrollto">
      //           Get Started
      //         </a>
      //         <a href="#services" className="btn-services scrollto">
      //           Our Services
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}
export default Intro;
