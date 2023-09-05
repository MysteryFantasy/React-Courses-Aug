const API = `https://61498bf2035b3600175ba32f.mockapi.io/exampleTodo`;

const getToDoListFromApi = () => fetch(API).then(data => data.json());

const changeToDoItemInApi = (id, item) => fetch(API+`/${id}`,
{
    method: `PUT`,
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(item),
}).then((data) => data.json());

const deletedToDoItemInApi = (id) => fetch(API+`/${id}`,
{
    method: `DELETE`
}).then((data) => data.json()); 

const addToDoItemToApi = (item) => fetch(API,
{
    method: `POST`,
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(item),
}).then((data) => data.json());


export {
    getToDoListFromApi,
    changeToDoItemInApi,
    deletedToDoItemInApi,
    addToDoItemToApi
};