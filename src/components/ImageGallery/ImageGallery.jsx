import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ hits, fetchData }) => {
  const showButton = hits.length > 0;
  return (
    <>
      <ul className={styles.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            dataImg={hits}
            alt={tags}
          />
        ))}
      </ul>

      {showButton && <LoadMoreBtn onClick={fetchData} />}
    </>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default ImageGallery;
