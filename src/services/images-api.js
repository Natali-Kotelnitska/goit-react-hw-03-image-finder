import axios from 'axios';

// https://pixabay.com/api/?key={KEY}&q=cat+white&page=1&image_type=photo&orientation=horizontal&per_page=12
// page = 1 (default)
// per_page = 12
// reset page=1

// id – унікальний ідентифікатор
// webformatURL – маленьке зображення для списку карток
// largeImageURL – велике зображення для модального вікна
const KEY = '25749157-a4c917c2bcd06827218e6e0f4';
const baseURL = 'https://pixabay.com/api/';
// axios.defaults.baseURL = '';

export default async function fetchImages(searchQuery) {
  return await axios.get(
    `${baseURL}?key=${KEY}&q=cat+white&page=1&image_type=photo&orientation=horizontal&per_page=12`
  );
}

// export default {
//     fetchImages,
// }
// .then(response => {
//         if (response.data.hits.length === 0) {
//             throw new error()
//         }
//     }
