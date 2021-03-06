import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    if(JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
      document.body.classList.add('dark-mode');
    }
    this.state = {
      darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
    }
    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    !this.state.darkMode 
    ? document.body.classList.add('dark-mode')
    : document.body.classList.remove('dark-mode')
    this.setState({
      darkMode: (!this.state.darkMode)
    });
    localStorage.setItem('DARK_MODE', !this.state.darkMode);
  }

  render() {
    return (
      <FontAwesomeIcon onClick={this.handleModeChange} icon={ faMoon } className="toggler" />
    );
  }
}

export default DarkModeToggle;