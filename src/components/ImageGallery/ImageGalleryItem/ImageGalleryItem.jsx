import PropTypes from 'prop-types';
import s from '../ImageGallery.module.css';

const ImageGalleryItem = ({ imageURL, tag }) => {
  return (
    <li className={s.imageGalleryItem}>
      <img src={imageURL} alt={tag} className={s.imageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
