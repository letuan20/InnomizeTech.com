import React from 'react';
import scrollIcon from '../../assets/images/icons/scrolldown-icon.png';
const GoBottom = () => {
  const [thePosition, setThePosition] = React.useState(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const renderGoBttomIcon = () => {
    return (
      <div
        className={`go-bottom ${thePosition ? 'active' : ''}`}
        onClick={scrollToBottom}
        role="button"
        tabIndex={0}
        aria-hidden="true"
      >
        <img width={32} height={65} src={scrollIcon} />
      </div>
    );
  };

  return <React.Fragment>{renderGoBttomIcon()}</React.Fragment>;
};

export default GoBottom;
