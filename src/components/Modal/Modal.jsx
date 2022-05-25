import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = () => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        {/* {this.props.children} */}
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
