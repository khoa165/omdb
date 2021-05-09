import axios from 'axios';
import {
  SEARCH_MOVIES,
  GET_MOVIE_INFO,
  NOMINATE_MOVIE,
  REMOVE_NOMINATION,
} from '../constants/types';
import { toast } from 'react-toastify';

export const searchMovies = (query) => async (dispatch) => {
  try {
    // Send request to OMDB API endpoint.
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`
    );
    if (res.data && res.data.Response === 'True') {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.Search,
      });
    } else {
      toast.error(res.data.Error);
    }
  } catch (err) {
    console.log(err);
    toast.error('Error happened. Please try again later!');
  }
};

export const getMovieInfo = (id) => async (dispatch) => {
  try {
    // Send request to OMDB API endpoint.
    const res = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&plot=full`
    );
    if (res.data && res.data.Response === 'True') {
      dispatch({
        type: GET_MOVIE_INFO,
        payload: res.data,
      });
    } else {
      toast.error(res.data.Error);
    }
  } catch (err) {
    console.log(err);
    toast.error('Error happened. Please try again later!');
  }
};

export const toggleNomination = (id, nominated) => async (dispatch) => {
  try {
    dispatch({
      type: nominated ? REMOVE_NOMINATION : NOMINATE_MOVIE,
      payload: id,
    });
  } catch (err) {
    console.log(err);
    toast.error('Error happened. Please try again later!');
  }
};
