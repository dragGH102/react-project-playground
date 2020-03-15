import React from 'react';
import logo from './logo.svg';
import './App.css';

function Logo() {
  return (<div>
    { /* A comment within JSX! */ }
    { /* Basic types such as string
         don't require {curly brackets}
         because they are are not 'variables'
    */}
    <img src={logo} alt='logo' />
  </div>);
}

export default Logo;
