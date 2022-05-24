import React, { Component } from 'react';
import fetchImages from 'services/images-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './ui/Button/Button';

// fetchImages().then(res => console.log(res.data.hits));

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      fetchImages(searchQuery, this.state.page).then(res => {
        this.setState({ images: res.data.hits });

        // this.setState({ page: (this.page += 1) });
      });
      // this.loadMoreImages();
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  loadMoreImages = () => {
    this.setState({ page: this.page + 1 });
  };

  render() {
    const { images } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          images={this.state.images}
        />
        {images.length > 11 && <Button onClick={this.loadMoreImages} />}
      </div>
    );
  }
}
