import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = (props) => {
  return (
    <div>
      <Navbar title="Song Share"/>
      {props.children}
    </div>
  )
}

module.exports = MainLayout;
