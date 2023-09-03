import React, {useState} from "react";
import "./style.sass";
import ThemeMode from "./ThemeMode";
import Statistics from "./Statistics";
import List from "./List";

export default function Todo() {
  
  const [themeModeColor, setThemeModeColor] = useState();
  const liftThemeMode = value => setThemeModeColor(value);
  const [taskListItems, setTaskListItems] = useState([]);

  return (
    <>
      <ThemeMode liftThemeMode={liftThemeMode} />
      <Statistics taskListItems={taskListItems} />
      <List themeMode={themeModeColor} liftedToDoList={setTaskListItems}/>
    </>
  )
}