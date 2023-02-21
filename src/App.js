import React from 'react';
import './index.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  return (
    <div>
      <h1>Todo Task List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
