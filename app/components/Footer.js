/**
 * @jsx React.DOM
 */

import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
          © 2014 Copyright Vinod
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;