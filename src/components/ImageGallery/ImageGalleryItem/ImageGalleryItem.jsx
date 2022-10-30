import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <li className={styles.ImageGalleryItem}>
        <img src={item.webformatURL} alt={item.tags} onClick={openModal} />
      </li>
      {showModal && (
        <Modal onCloseModal={closeModal}>
          <img src={item.largeImageURL} alt={item.tags} />
        </Modal>
      )}
      {showModal && <Loader />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
