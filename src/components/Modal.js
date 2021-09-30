import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import '../styles/modal.css';
import { jobs } from './jobs';

const Modal = ({
  id, modalToggle, applyToggle
}) => {
  const [getUser, setGetUser] = React.useState();

  React.useEffect(() => {
    jobs.filter((e) => e.id === id && setGetUser(e));
  }, [modalToggle, jobs]);

  return getUser !== undefined && (
    <div className="modal flex left-0 justify-center items-center">
      <div id="modal-content" className="bg-white lg:p-14 rounded-xl space-y-5 p-1 md:p-3">
        <div className="flex justify-end">
          <button type="button" onClick={() => modalToggle(false)}>
            <AiOutlineCloseCircle size={30} />
          </button>
        </div>
        <div>
          <p className="primary-font lg:text-xl">{getUser.name}</p>
          <div className="flex flex-row mt-2">
            <MdLocationOn />
            <p className="primary-font text-sm lg:text-xl">{getUser.location}</p>
          </div>
        </div>
        <p className="primary-font">{getUser.bio}</p>
        <div className="flex flex-row space-x-3 pb-4">
          {getUser.skills.map((e) => (
            <div key={e} className="space-x-2 bg-yellow-400 rounded-lg px-2 lg:p-3 flex justify-center items-center">
              <p className="primary-font text-white">{e}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="primary-font lg:text-xl font-bold">Job Responsibilities</p>
          <p className="primary-font text-sm lg:text-xl">{getUser.about}</p>
        </div>
        <div className="flex justify-end">
          <button onClick={() => { modalToggle(false); applyToggle(id); }} type="button" className="bg-red-400 p-3 px-5 rounded-lg">
            <p className="primary-font text-red-100">Apply</p>
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = ({
  modalToggle: () => {},
  applyToggle: () => {},
  id: [],
});

Modal.propTypes = {
  modalToggle: PropTypes.func,
  applyToggle: PropTypes.func,
  id: PropTypes.node,
};

export default Modal;
