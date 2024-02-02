
import { Children, createContext, useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import axios from 'axios';
// import tasks from "./models/Tasks.json";

export const lists = createContext();



function App() {
  const [taskList, handleTasks ]= useState();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((response) => {
          handleTasks(response.data);
        })

        
  }, [])
  return (
    <div>
      <lists.Provider value={{taskList, handleTasks}}>
        <Outlet />
      </lists.Provider> 
    </div>
  )
}

export default App