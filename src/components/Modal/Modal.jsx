import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = () => {
  return (
    <div class={s.overlay}>
      <div class={s.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
