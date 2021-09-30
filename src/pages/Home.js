import React from 'react';
import HomeNavbar from './HomeNavbar';
import '../styles/home.css';

const Home = () => {
  console.log();
  return (
    <div className="home-parent">
      <div className="home-bg flex lg:flex-row lg:space-x-5 flex-col">
        <div className="lg:h-full flex items-center lg:p-2 justify-center">
          <HomeNavbar />
        </div>
        <div className="quality-style flex justify-center items-center">
          <p className="primary-font text-white text-xl lg:text-3xl">
            This is where good quality jobs are coming from
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
