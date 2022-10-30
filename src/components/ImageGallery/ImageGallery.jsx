import Button from 'components/LoadMoreBtn/LoadMoreBtn';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { fetchPhotos } from 'services/ImagesAPI';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchQuery }) => {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);
    fetchPhotos(searchQuery, page).then(res => {
      if (res.hits.length === 0) {
        Notify.failure('Wrong request');
        setIsLoading(false);
      } else {
        page > 1
          ? setImages(prevImages => [...prevImages, ...res.hits])
          : setImages(res.hits);
        setIsLoading(false);
      }
    });
  }, [page, searchQuery]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {images && (
        <ul className={styles.ImageGallery}>
          {images.map(item => {
            return <ImageGalleryItem key={item.id} item={item} />;
          })}
        </ul>
      )}
      {images && <Button children={'Load more'} onClick={loadMore} />}
    </>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
