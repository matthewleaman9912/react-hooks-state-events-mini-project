import React, {useState} from "react";


function Task({category, text, taskList}) {

  function handleClick(event) {
    
  }

  return (
    <div className="task"> 
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
