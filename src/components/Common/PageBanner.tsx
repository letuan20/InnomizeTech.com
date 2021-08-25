import React,{ useState, useEffect} from 'react';

const PageBanner = ({
  pageTitle,
  video,
  homePageUrl,
  homePageText,
  activePageText,
}) => {

  const [display,setDisplay]=useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setDisplay(false), 1500);
    return () => clearTimeout(timer1);
   },[]);

  return (
      <div className="page-title-area">
       { display ? <div className="skeleton" style= {{ background:'#ffffff',width:'100%', height:'350px' }} ></div> :  <video
        style={{ objectFit: 'cover', width: '100%' }}
        height="350"
        autoPlay
        muted
        loop>
        <source src={ video } type="video/mp4" />
      </video> } 
      <div className="container">
        <div className="page-title-content">
          { display ? <h2 style={{ color: '#262626' }}>{ pageTitle }</h2> : <h2>{ pageTitle }</h2> }
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
