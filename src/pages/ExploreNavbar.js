import React from 'react';
import { GrHome } from 'react-icons/gr';
import '../styles/explore-navbar.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const ExploreNavbar = ({ navbar }) => {
  const [dropDown, setDropDown] = React.useState(false);
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  };

  const showDropDown = (visible) => {
    setDropDown(visible);
  };

  return (
    <div className={navbar ? 'explore-parent2nd' : 'explore-parent1st'}>
      <div className="lg:hidden">
        <button onClick={() => (dropDown ? showDropDown(false) : showDropDown(true))} type="button">
          {dropDown
            ? (
              <AiOutlineCloseCircle size={40} />
            )
            : <RiArrowDropDownLine size={40} />}
        </button>
      </div>
      {dropDown && (
        <div className="flex justify-end p-24 lg:hidden">
          <button onClick={goToHome} className="flex flex-row space-x-5 " type="button">
            <GrHome size={30} />
            <p>Home</p>
          </button>
        </div>
      )}
      <button onClick={goToHome} className="lg:flex flex-row space-x-5 hidden" type="button">
        <GrHome size={30} />
        <p>Home</p>
      </button>
    </div>
  );
};

ExploreNavbar.defaultProps = ({
  navbar: [],
});

ExploreNavbar.propTypes = {
  navbar: PropTypes.node,
};

export default ExploreNavbar;
