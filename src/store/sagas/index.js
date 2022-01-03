import {
  all,
  delay,
  call,
  put,
  takeEvery,
  select,
} from "@redux-saga/core/effects";
import {
  addCategoryApi,
  addMovieApi,
  categoriesApi,
  updateCategoryApi,
} from "../../api/apis/movie";
import {
  addCategoryFailure,
  addCategorySuccess,
  addMovieFailure,
  addMovieSuccess,
  deleteMovieFailure,
  deleteMovieSuccess,
  editMovieFailure,
  editMovieSuccess,
  fetchCategories,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "../actions";
import { ADD_CATEGORY, ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FETCH_CATEGORIES } from "../actionTypes";

function* fetchCategoriesSaga() {
  try {
    const response = yield call(categoriesApi);
    yield put(fetchCategoriesSuccess(response));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

function* watchFetchCategoriesSaga() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
}

function* addCategorySaga({ payload }) {
  try {
    const response = yield call(addCategoryApi, payload);
    yield put(addCategorySuccess(response));
  } catch (error) {
    console.log(error);
    yield put(addCategoryFailure(error));
  }
}

function* watchAddCategorySaga() {
  yield takeEvery(ADD_CATEGORY, addCategorySaga);
}

function* addMovieSaga({ payload }) {
  try {
    
    const response = yield call(updateCategoryApi,({id:payload.id, data:payload.categoryData}));
    yield put(addMovieSuccess(response));
    yield put(fetchCategories())
  } catch (error) {
    console.log(error);
    yield put(addMovieFailure(error));
  }
}

function* watchAddMovieSaga() {
  yield takeEvery(ADD_MOVIE, addMovieSaga);
}


function* deleteMovieSaga({ payload }) {
  
  try {

    const response = yield call(updateCategoryApi,({id:payload.id, data:payload.updatedCategory}));
    yield put(deleteMovieSuccess(response));
    yield put(fetchCategories())
  } catch (error) {
    console.log(error);
    yield put(deleteMovieFailure(error));
  }
}

function* watchDeleteMovieSaga() {
  yield takeEvery(DELETE_MOVIE, deleteMovieSaga);
}


function* editMovieSaga({ payload }) {
  
  try {
    const response = yield call(updateCategoryApi,({id:payload.id, data:payload.updatedCategory}));
    yield put(editMovieSuccess(response));
    yield put(fetchCategories())
  } catch (error) {
    console.log(error);
    yield put(editMovieFailure(error));
  }
}

function* watchEditMovieSaga() {
  yield takeEvery(EDIT_MOVIE, editMovieSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchCategoriesSaga(),
    watchAddCategorySaga(),
    watchAddMovieSaga(),
    watchDeleteMovieSaga(),
    watchEditMovieSaga()
  ]);
}
