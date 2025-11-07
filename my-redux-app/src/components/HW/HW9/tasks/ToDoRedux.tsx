import type { JSX } from "react";
import Tasks from "./Tasks";
import TaskCreation from "./TaskCreation";

export default function ToDoRedux(): JSX.Element{
  return (
    <div>
      <Tasks/>
      <TaskCreation/>
    </div>
  )
}


