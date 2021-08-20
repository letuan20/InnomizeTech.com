import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item col-lg-12 col-md-12 col-sm-12">
      <div className="accordion-title" onClick={toggle}>
        <h3>{title}</h3>
        {isOpen ? <div className="minus"></div> : <div className="plus"></div>}
      </div>
      <Collapse isOpen={isOpen}>
        <div className="accordion-content">{content}</div>
      </Collapse>
    </div>
  );
};

export default Accordion;
