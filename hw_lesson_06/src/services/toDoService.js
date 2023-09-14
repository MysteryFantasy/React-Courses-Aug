import axios from 'axios';

const API = `https://65035e58a0f2c1f3faebdbb4.mockapi.io/ToDoList`;

const getToDoListFromApi = () => axios(API).then(({data}) => data);

const changeToDoItemInApi = (id, item) =>
  axios.put(API + `/${id}`, item, {
    headers: {
      "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);


const deletedToDoItemInApi = (id) => axios.delete(API + `/${id}`).then(({ data }) => data);

const addToDoItemToApi = (item) =>
  axios.post(API, item, {
    headers: {
      "Content-type": "application/json",
      },
  })
  .then(({ data }) => data);


export {
  getToDoListFromApi,
  changeToDoItemInApi,
  deletedToDoItemInApi,
  addToDoItemToApi
};