/**
 * @jsx React.DOM
 */

import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnMount() {

  }

  _onChange(state) {

  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo">
            Community Manager
          </Link>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;