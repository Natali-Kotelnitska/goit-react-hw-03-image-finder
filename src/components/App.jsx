import React, { Component } from 'react';
import fetchImages from 'services/images-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal';
// import Modal from './Modal';
import Searchbar from './Searchbar/Searchbar';
import Button from './ui/Button/Button';
import mapper from './utils/mapper';
import Error from './ui/Error/Error';

// fetchImages().then(res => console.log(res.data.hits));

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    showModal: false,
    loading: false,
    largeImage: '',
    tag: '',
    error: null,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  // }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      this.fetchGallery();
    }
  }

  fetchGallery = () => {
    const { searchQuery, page } = this.state;
    setTimeout(() => {
      fetchImages(searchQuery, page)
        .then(res => {
          const nextImages = mapper(res.data.hits);

          if (!res.data.hits.length) {
            // this.setState({ loading: false });
            this.setState({ images: [] });
            alert('Sorry, image not found. ');
            return;
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...nextImages],
          }));
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => this.setState({ loading: false }));
    }, 1500);
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  onLoadBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (tag, largeImageURL) => {
    this.toggleModal();
    this.setState({ largeImage: largeImageURL });
    this.setState({ tag: tag });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
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
        {this.state.loading && <h1>Loading ... </h1>}
        {this.state.error && <Error message={this.state.error.message} />}
        <ImageGallery
          // searchQuery={this.state.searchQuery}
          images={this.state.images}
          onOpenModal={this.openModal}
        />
        {images.length > 11 && <Button onBtnClick={this.onLoadBtnClick} />}
        {showModal && (
          <Modal
            largeImg={this.state.largeImage}
            altTag={this.state.tag}
            onModalClick={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
