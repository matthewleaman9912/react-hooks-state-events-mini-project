import React, {useState} from "react";
import Task from "./Task"

function TaskList({TASKS}) {

  const taskList = TASKS.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} /> 
  })
  
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
