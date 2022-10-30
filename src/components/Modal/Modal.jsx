import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', escClose);
  });

  const escClose = e => {
    if (onCloseModal) {
      if (e.code === 'Escape') {
        onCloseModal();
        window.removeEventListener('keydown', escClose);
      }
    }
  };

  const closeModal = e => {
    if (e.target.nodeName === 'DIV') {
      onCloseModal();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

Modal.protoTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
