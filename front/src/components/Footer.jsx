import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="d-flex align-items-center footer-container justify-content-around">
        <div>
        <p>Made with <i className="fas fa-heart"></i> by LucieG</p>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/lucie-genest/' className="linkedin-logo" rel="noopener noreferrer" target="_blank"><i
        className="fab fa-linkedin"></i></a>
        </div>
        <div>
        <a href='https://github.com/luciegst?tab=repositories' className="github-logo" rel="noopener noreferrer" target="_blank"><i
        className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;