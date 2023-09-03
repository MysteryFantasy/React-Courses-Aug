import React from "react";

export default function Statistics({taskListItems}) {
  
  const totalTasks = taskListItems.length;
  const completedTasks = taskListItems.filter(item => item.completed).length;
  const inProgressTasks = taskListItems.filter(item => !item.completed).length;
  
  return (
    <ul>
      <li>All tasks: <strong>{totalTasks}</strong></li>
      <li>Completed tasks: <strong>{completedTasks}</strong></li>
      <li>In progress tasks: <strong>{inProgressTasks}</strong></li>
    </ul>
  )

}