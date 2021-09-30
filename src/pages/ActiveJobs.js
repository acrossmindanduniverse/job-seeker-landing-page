import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { jobs } from '../components/jobs';
import '../styles/active-jobs.css';
import Modal from '../components/Modal';
import ExploreNavbar from './ExploreNavbar';

const ActiveJobs = () => {
  const [modal, setModal] = React.useState(false);
  const [apply, setApply] = React.useState(0);
  const [getId, setGetId] = React.useState(0);
  const [navbar, setNavbar] = React.useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    changeNavbarBackground();
    window.addEventListener('scroll', changeNavbarBackground);
  }, []);

  const showModal = (visible) => {
    setModal(visible);
  };

  return (
    <div>
      <ExploreNavbar navbar={navbar} />
      <div className="active-jobs-parent">
        <div className="flex justify-center flex-col items-center
      bg-gray-100 h-auto space-y-24 pt-32 pb-32 rounded-lg lg:px-80 md:px-44 px-36"
        >
          {jobs.map((e) => (
            <div className="flex flex-col bg-white rounded-xl w-full p-14 px-32 justify-center items-center lg:inline-block lg:p-10 space-y-9" key={e.id}>
              {modal && (
              <div className="h-full fixed w-full flex justify-center items-center">
                <Modal
                  modalToggle={setModal}
                  applyToggle={setApply}
                  id={getId}
                />
              </div>
              )}
              <div className="space-y-3">
                <p className="primary-font lg:text-xl">{e.name}</p>
                <div className="flex flex-row">
                  <MdLocationOn />
                  <p className="text-sm">{e.location}</p>
                </div>
              </div>
              <p className="primary-font lg:text-2xl">{e.bio}</p>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-3 lg:space-y-0">
                <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-5">
                  {e.skills.map((el) => (
                    <div key={el} className="bg-blue-700 rounded-lg px-10 p-2 lg:p-3 flex justify-center items-center">
                      <p className="text-white primary-font text-sm lg:text-xl">{el}</p>
                    </div>
                  ))}
                </div>
                {e.id === apply ? (
                  <div
                    className="bg-red-600 p-3 px-5 rounded-xl flex justify-center items-center"
                  >
                    <p className="primary-font text-white">Applied</p>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      showModal(true);
                      setGetId(e.id);
                    }}
                    type="button"
                    className="bg-green-600 p-5 px-10 lg:p-3 flex justify-center items-center lg:px-5 rounded-xl"
                  >
                    <p className="primary-font text-white">Detail</p>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveJobs;
