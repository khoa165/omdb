/* eslint-disable import/no-anonymous-default-export */
import {
  SEARCH_MOVIES,
  GET_MOVIE_INFO,
  NOMINATE_MOVIE,
  REMOVE_NOMINATION,
} from '../constants/types';
import { toast } from 'react-toastify';

const initialState = {
  current: null,
  movies: null,
  nominations: [],
  count: 0,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: payload.map((movie) => {
          return { ...movie, nominated: false };
        }),
        loading: false,
      };
    case GET_MOVIE_INFO:
      return { ...state, current: payload, loading: false };
    case NOMINATE_MOVIE:
      if (state.count === 4) {
        toast.success('You successfully nominated 5 movies!');
      }
      if (state.count >= 5) {
        toast.error('You can only nominate maximum 5 movies.');
        return state;
      }
      const movie = state.movies.filter((movie) => movie.imdbID === payload)[0];
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.imdbID === payload ? { ...movie, nominated: true } : movie
        ),
        nominations: [...state.nominations, movie],
        loading: false,
        count: state.count + 1,
      };
    case REMOVE_NOMINATION:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.imdbID === payload ? { ...movie, nominated: false } : movie
        ),
        nominations: state.nominations.filter(
          (movie) => movie.imdbID !== payload
        ),
        loading: false,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
