import axios from 'axios';

const KEY = '91ea660d45443b6457907c05dafcc6a1';
const URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = URL;

// фільми в тренді

export const serverHitsList = async () => {
  try {
    const getHitsList = await axios.get(
      `trending/movie/day?api_key=${KEY}`
    );

    return await getHitsList.data.results;
  } catch (error) {
    console.log(error);
  }
};

// повне інфо про фільм

export const serverMovie = async id => {
  try {
    const getMovieInfo = await axios.get(
      `movie/${id}?api_key=${KEY}&language=en-US`
    );

    return await getMovieInfo.data;
  } catch (error) {
    console.log(error);
  }
};

// пошук фільмів

export const serverSearch = async (name, page = 1) => {
  try {
    const getMovieName = await axios.get(
      `search/movie?api_key=${KEY}&language=en-US&query=${name}&page=${page}&include_adult=false`
    );

    return await getMovieName.data;
  } catch (error) {
    console.log(error);
  }
};

// актори

export const serverActors = async id => {
  try {
    const getActors = await axios.get(
      `movie/${id}/credits?api_key=${KEY}&language=en-US`
    );

    return await getActors.data.cast;
  } catch (error) {
    console.log(error);
  }
};

// відгуки

export const serverReviews = async id => {
  try {
    const getReviews = await axios.get(
      `movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );

    return await getReviews.data.results;
  } catch (error) {
    console.log(error);
  }
};
