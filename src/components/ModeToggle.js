import React from 'react';
import useDarkMode from 'use-dark-mode';

const ModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <label class="switch">
      <input type="checkbox" onClick={darkMode.toggle} checked={darkMode.value}/>
      <span class="slider round"></span>
    </label>
  );
};

export default ModeToggle;