//-- посилання на API
const API = `https://61498bf2035b3600175ba32f.mockapi.io/exampleTodo`;

//-- виклик API методом GET
const getToDoListFromApi = () => fetch(API).then(data => data.json());

// -- функція для зміни об'єкта або його властивості в масиві в БД
const changeToDoItemInApi = (id, item) => fetch(API+`/${id}`,
{
    method: `PUT`,
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(item),
}).then((data) => data.json());

// -- функція для видалення об'єкта з масиву в БД
const deletedToDoItemInApi = (id) => fetch(API+`/${id}`,
{
    method: `DELETE`
}).then((data) => data.json()); 

//-- функція для додавання нового елементу в масив БД
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