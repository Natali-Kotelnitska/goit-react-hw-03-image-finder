import s from '../ImageGallery.module.css';
const ImageGalleryItem = ({ imgId, imageURL, tag }) => {
  return (
    <li className={s.imageGalleryItem} key={imgId}>
      <img src={imageURL} alt={tag} className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
