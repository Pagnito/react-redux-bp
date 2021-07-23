import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {

    return (
      <footer id="footer-container">
        <div id="footer-text">
            <b>About us • @2021</b>
        </div>
      </footer>
    );
  }
}

export default Footer;
