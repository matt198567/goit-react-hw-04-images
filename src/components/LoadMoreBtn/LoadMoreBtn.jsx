import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.BtnContainer}>
      <button className={styles.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
