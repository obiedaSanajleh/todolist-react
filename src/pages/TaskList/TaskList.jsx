import React, { useState, useRef, useEffect } from 'react';

function TaskList() {
  const [tasks, changeTasks] = useState([]); 
  const inputRef = useRef(null); 

 
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks'); 
    if (storedTasks) {
      changeTasks(JSON.parse(storedTasks)); 
    }
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
  };

  const AddTask = (e) => {
    e.preventDefault();
    const task = inputRef.current.value;

    if (task.trim() === "") return; 

    const newTasks = [...tasks, { text: task, completed: false }];
    changeTasks(newTasks);
    saveTasksToLocalStorage(newTasks); 
    inputRef.current.value = ""; 
  };


  const DeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); 
    changeTasks(newTasks); 
    saveTasksToLocalStorage(newTasks); 
  };


  const handelcheck = (e, index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: e.target.checked } : task
    );
    changeTasks(updatedTasks); 
    saveTasksToLocalStorage(updatedTasks); 
  };


  const calculateProgress = () => {
    if (tasks.length === 0) return 0; 
    const completedTasks = tasks.filter((task) => task.completed).length; 
    return (completedTasks / tasks.length) * 100; 
  };

  return (
    <>
      <form className="p-3" onSubmit={AddTask}>
        <div className="mb-3">
          <label className="form-label">Write your task</label>
          <input type="text" className="form-control" ref={inputRef} id="exampleTask" />
        </div>
        <button type="submit" className="btn btn-primary">ADD</button>
      </form>

    
      <div className="progress-line p-3">
        <p>Your Progress</p>
        <div className="progress" role="progressbar" aria-valuenow={calculateProgress()} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar" style={{ width: `${calculateProgress()}%` }} />
        </div>
        <p>{calculateProgress().toFixed(0)}% Completed</p>
      </div>

    
      <ul className="list-group p-3">
        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
          MY TASKS
        </button>

        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="task-and-box">
              <input
                className="form-check-input me-1"
                type="checkbox"
                checked={task.completed}
                onChange={(e) => handelcheck(e, index)} 
                id={`taskCheckbox-${index}`}
              />
              <label
                className="form-check-label"
                htmlFor={`taskCheckbox-${index}`}
                style={{
                  textDecoration: task.completed ? "line-through" : "none", 
                }}
              >
                {task.text}
              </label>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => DeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
