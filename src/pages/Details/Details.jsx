import React from 'react'
import './../.././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import logo from './images/logo.jpg';
function Details() {
  return (
    <>
<div>
  <div className="card mb-3">
    <img src={logo} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Introduction About Myself and the ToDoList Website</h5>
      <p className="card-text"><br /> <br /> Hi, I’m Obieda Senjlawi!<br /> <br /> 
I am passionate about time management and helping people organize their daily lives effectively. I strongly believe that organization is the first step toward achieving goals. This inspired me to create a Website  that simplifies time management for everyone.
<br /> <br /> About the ToDoList  Website :<br /> <br /> 
ToDoList is a simple yet powerful Website designed to help you manage your time and tasks with ease. With ToDoList, you can:<br /> <br /> 
-Create daily and weekly task lists.<br /> 
-Prioritize your tasks based on importance.<br /> 
-Monitor your progress toward achieving your goals.<br /> <br /> 
The Website’s mission is to help you use your time wisely, reduce stress caused by disorganization, and focus on what truly matters.
</p>

    </div>
  </div>
</div>

    </>
  )
}

export default Details