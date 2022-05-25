import React, { Component } from 'react';
import fetchImages from 'services/images-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal';
import Searchbar from './Searchbar/Searchbar';
import Button from './ui/Button/Button';

// fetchImages().then(res => console.log(res.data.hits));

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    showModal: false,
    image: {},
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      fetchImages(searchQuery, page).then(res => {
        this.setState({ images: res.data.hits });
        // this.setState(prevState => {
        //   return { page: prevState.page + 1 };
        // });

        const item = res => {
          return res.data.hits.map(item => {
            this.setState({ image: { ...item } });
          });
        };

        // this.setState({ page: (page += 1) });
      });
      // this.loadMoreImages();
      this.pageIncrement();
    }
  }
  pageIncrement = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  loadMoreImages = () => {
    this.setState({ page: this.page + 1 });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !this.state.showModal,
    }));
  };

  render() {
    const { images, showModal } = this.state;

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
          openModal={this.toggleModal}
        />
        {images.length > 11 && <Button onClick={this.loadMoreImages} />}
        {showModal && <Modal images={images} />}
        {/* <img src={images.largeImageURL} alt={images.tags} /> */}
      </div>
    );
  }
}
