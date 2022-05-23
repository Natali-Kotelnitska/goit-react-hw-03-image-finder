import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import fetchImages from 'services/images-api';
import s from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    fetchImages().then(res => {
      // console.log(res.data.hits);
      this.setState({ images: res.data.hits });
    });
  }
  render() {
    // console.log(this.state.images);
    return (
      <ul className={s.imageGallery}>
        {this.state.images.map(({ id, webformatURL, tags }) => {
          return (
            <ImageGalleryItem imgId={id} imageURL={webformatURL} tag={tags} />
          );
        })}
      </ul>
    );
  }
}
// export default ImageGallery;
