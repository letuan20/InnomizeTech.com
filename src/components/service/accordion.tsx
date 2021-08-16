import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item col-lg-6 col-md-12 col-sm-12">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        {isActive ? (
          <div className="minus"></div>
        ) : (
          <div className="plus"></div>
        )}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
