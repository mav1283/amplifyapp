import React from 'react';
// import logo from '../../logo.svg';
import { AmplifySignOut } from '@aws-amplify/ui-react';

function Header() {
  return (
    <header className='App-header'>
      <div className='logo'>
        {/* <img className='logo-icon' src={logo} /> */}
        <p className='logo-text'>My Notes API</p>
      </div>
      <div className='cta'>
        <AmplifySignOut />
      </div>
    </header>
  );
}

export default Header;
