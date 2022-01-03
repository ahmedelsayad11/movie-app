import {
  ADD_CATEGORY,
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_SUCCESS,
  ADD_MOVIE,
  ADD_MOVIE_FAILURE,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE,
  DELETE_MOVIE_FAILURE,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_FAILURE,
  EDIT_MOVIE_SUCCESS,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
} from "../actionTypes/index";

const defaultState = {
  categories: [],
  loading: false,
  error: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_CATEGORIES_SUCCESS: {
      const categories = action.payload;
      return {
        ...state,
        categories: [...categories],
        loading: false,
      };
    }
    case FETCH_CATEGORIES_FAILURE: {
      return {
        ...state,
        loading: false,
        categories: {},
        error: true,
      };
    }

    case ADD_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_CATEGORY_SUCCESS: {
      const addedCategory = {...action.payload , movies:[]};

      return {
        ...state,
        loading: false,
        categories: [...state.categories, addedCategory],
      };
    }
    case ADD_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        categories: [...state.categories],
      };
    }
    case ADD_MOVIE: {
      return { ...state, loading: true };
    }

    case ADD_MOVIE_SUCCESS: {
      return {...state , loading:false }
    }
    case ADD_MOVIE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        categories: [...state.categories],
      };
    }
    case DELETE_MOVIE: {

      return { ...state, loading: true };
    }
    case DELETE_MOVIE_SUCCESS: {
 
      return {...state , loading:false }
    }
    case DELETE_MOVIE_FAILURE: {

      return {
        ...state,
        loading: false,
        error: true,
        categories: [...state.categories],
      };
    }
    case EDIT_MOVIE: {
      return { ...state, loading: true };
    }
    case EDIT_MOVIE_SUCCESS: {
 
      return {...state , loading:false }
    }
    case EDIT_MOVIE_FAILURE: {

      return {
        ...state,
        loading: false,
        error: true,
        categories: [...state.categories],
      };
    }
    default:
      return state;
  }
};

export default reducer;
