import React from 'react';
import { useHistory } from 'react-router';
import '../styles/home-navbar.css';

const HomeNavbar = () => {
  const history = useHistory();
  const handleExplore = () => {
    history.push('/jobs');
  };

  return (
    <button onClick={handleExplore} type="button" className="w-24">
      <p className="explore explore2nd text-2xl cursor-pointer">Explore</p>
    </button>
  );
};

export default HomeNavbar;
