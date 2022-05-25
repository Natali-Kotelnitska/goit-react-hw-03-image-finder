import PropTypes from 'prop-types';
import s from '../ImageGallery.module.css';

const ImageGalleryItem = ({ imageURL, tag, onClick }) => {
  return (
    <li className={s.imageGalleryItem}>
      <img
        onClick={onClick}
        src={imageURL}
        alt={tag}
        className={s.imageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default ImageGalleryItem;
