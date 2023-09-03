import React, {useState, useEffect} from "react"; 

export default function List({themeMode, liftedToDoList}) {
  const [toDoList, setToDoList] = useState([
    {
      "title":"incidunt numquam alias",
      "completed":true,
      "rating":26,
      "id":"4"
    },
    {
      "title":"eligendi porro voluptates",
      "completed":true,
      "rating":68,
      "id":"5"
    },
    {
      "title":"rerum accusantium fugiat",
      "completed":true,
      "rating":34,
      "id":"6"
    },
    {
      "title":"eligendi ipsum distinctio",
      "completed":false,
      "rating":22,
      "id":"7"
    },
    {
      "title":"reiciendis neque amet",
      "completed":true,
      "rating":83,
      "id":"8"
    },
    {
      "title":"ipsum laudantium asperiores",
      "completed":true,
      "rating":91,
      "id":"9"
    },
    {
      "title":"rem tempora fugit",
      "completed":false,
      "rating":51,
      "id":"10"
    }
  ]);

  const deleteListItem = (itemId) => {
    setToDoList((prevState) =>
      prevState.filter((item) => item.id !== itemId)
    );
  };

  const completeListItem = (itemId) => {
    setToDoList((prevState) =>
      prevState.map((item) => {
        if (item.id === itemId) {
          return {...item, completed: true };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    liftedToDoList(toDoList);
  }, [toDoList])

  return toDoList.length ?(
    <table className={themeMode}>
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {toDoList.map((item,index) => (
          <tr key={index} className={item.completed ? `item--completed` : `item--uncompleted`}>
            <td>{item.title}</td>
            <td>
              <button onClick={() => item.completed ? deleteListItem(item.id) : completeListItem(item.id)}>{item.completed ? 'Delete' : 'Complete'}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ): null;
}