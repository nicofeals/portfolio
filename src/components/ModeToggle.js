import React from 'react';
import {HiMoon} from 'react-icons/hi'
import useDarkMode from 'use-dark-mode';

const ModeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <label className="switch">
      <input type="checkbox" onClick={darkMode.toggle} checked={darkMode.value} readOnly={true}/>
      <span className="slider round"></span>
    </label>
  );
};

export default ModeToggle;