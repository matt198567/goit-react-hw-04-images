import axios from 'axios';
import { BASE_URL, API_KEY, SEARCH_PARAMS } from '../services/ImagesAPI';

const fetchHits = ({ name = '', page = 1 }) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${name}&page=${page}&${SEARCH_PARAMS}`;
  return axios.get(url).then(({ data }) => data.hits);
};

export default fetchHits;
