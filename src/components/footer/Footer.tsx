import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="cs-footer">
      <div className="cs-footer__content">
        &copy; {(new Date().getFullYear())} Sportlabs Technology Ltd. All rights reserved
      </div>
    </footer>
  )
}

export default Footer;