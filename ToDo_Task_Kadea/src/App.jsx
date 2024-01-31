
import { Children, createContext, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import tasks from "./models/Tasks.json";

export const lists = createContext();



function App() {
  const [taskList, handleTasks ]= useState(tasks);
  return (
    <div>
      <lists.Provider value={{taskList, handleTasks}}>
        <Outlet />
      </lists.Provider> 
    </div>
  )
}

export default App
