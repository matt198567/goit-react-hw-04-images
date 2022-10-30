import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = async (query, page) => {
  try {
    const response = await axios.get(
      `?key=29544404-d54a0822c960a455fb427c754&page=${page}&q=${query}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await JSON.parse(response.request.response);
    return data;
  } catch (error) {
    Notify.warning(
      `We're sorry, but you've reached the end of search results.`
    );
  }
};
