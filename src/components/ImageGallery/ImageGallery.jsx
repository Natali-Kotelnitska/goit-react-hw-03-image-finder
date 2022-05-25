import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  // console.log(images);
  return (
    <ul className={s.imageGallery}>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            imageURL={webformatURL}
            tag={tags}
            id={id}
            key={id}
            onClick={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func,
};

export default ImageGallery;
