import {
  ADD_CATEGORY,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILURE,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actionTypes/index';

// actions

export const fetchCategories = _ => ({
  type: FETCH_CATEGORIES,
});
export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});
export const addCategorySuccess = (category) => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: category,
});
export const addCategoryFailure = (error) => ({
  type: ADD_CATEGORY_FAILURE,
  payload: error,
});

export const addMovie = (payload) => ({
  type: ADD_MOVIE,
  payload ,
});
export const addMovieSuccess = (payload) => ({
  type: ADD_MOVIE_SUCCESS,
  payload,
});
export const addMovieFailure = (error) => ({
  type: ADD_MOVIE_FAILURE,
  payload: error,
});

export const deleteMovie = (payload) => ({
  type: DELETE_MOVIE,
  payload
});
export const deleteMovieSuccess = (payload) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload
});
export const deleteMovieFailure = (error) => ({
  type: DELETE_MOVIE_FAILURE,
  payload: error,
});

export const editMovie = (payload) => ({
  type: EDIT_MOVIE,
  payload,
});
export const editMovieSuccess = (movie) => ({
  type: EDIT_MOVIE_SUCCESS,
  payload: movie,
});
export const editMovieFailure = (error) => ({
  type: EDIT_MOVIE_FAILURE,
  payload: error,
});
