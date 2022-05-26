import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onModalClick: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClick();
    }
  };

  // onOverlayClick = e => {
  //   if (e.target === e.currentTarget) {
  //     this.props.onModalClick();
  //   }
  // };

  render() {
    const { onModalClick, largeImg, altTag } = this.props;
    return (
      <div className={s.overlay} onClick={() => onModalClick()}>
        <div className={s.modal}>
          {/* {this.props.children} */}
          <img src={largeImg} alt={altTag} className={s.modalImg} />
        </div>
      </div>
    );
  }
}

// const Modal = ({ onModalClick, largeImg, altTag }) => {
//   window.addEventListener('keydown', e => {
//     if (e.code === 'ESCAPE') {
//       console.log(e.code);
//       onModalClick();
//     }
//   });

//   return (
//     <div className={s.overlay} onClick={() => onModalClick()}>
//       <div className={s.modal}>
//         {/* {this.props.children} */}
//         <img src={largeImg} alt={altTag} className={s.modalImg} />
//       </div>
//     </div>
//   );
// };

// Close modal on ESC
// function onClose(e) {
//   if (e.code === 'ESCAPE') {
//     onModalClick();
//   }
// }

// export default Modal;
