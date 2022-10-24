import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import ModalImage from 'react-modal-image';

const ImageGalleryItem = ({ webformatURL, largeImageURL, alt }) => {
  return (
    <li>
      <div className={styles.ImageGalleryItem}>
        <ModalImage small={webformatURL} large={largeImageURL} alt={alt} />
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
