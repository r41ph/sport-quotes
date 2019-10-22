import React, { FunctionComponent } from 'react';
import './Footer.scss';

interface IProps {
  copy: string
}

const Footer:FunctionComponent<IProps> = ({copy}) => {
  return (
    <footer className="cs-footer">
      <div className="cs-footer__content">
        &copy; {new Date().getFullYear()} {copy}
      </div>
    </footer>
  )
}

export default Footer;