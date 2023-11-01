import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const DATA = [
  {id: "todo-0", name: "Eat", completed: false},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false},
]
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);