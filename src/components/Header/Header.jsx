import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const history = useHistory();
  return (
    <div className="Header">
      <div className="image-container">
        <img
          alt="logo"
          role="none"
          onClick={() => history.push('/')}
          src="/public/images/gk_tag.png"
        />
      </div>
    </div>
  );
};

export default Header;
