import server from '../server';

export const categoriesApi = async () => {
  const response = await server.get('/');
  return response?.data;
};

export const addCategoryApi = async (data) => {
  const response = await server.post('/', data);
  return response.data;
};

export const updateCategoryApi =async ({id:categoryId,data}) =>{
  const response = await server.put(`/${categoryId}`,data);
  return response.data
}

// export const addMovieApi = async ({id:categoryId,data}) => {
//   const response = await server.post(`/${categoryId}/movies/`, data);
//   return response;
// };
// export const deleteMovieApi = async ({id:categoryId,data}) => {
//   const response = await server.put(`/${categoryId}`, data);
//   return response.data;
// };
// export const editMovieApi = async (data) => {
//   const response = await server.put('/', data);
//   return response;
// };
