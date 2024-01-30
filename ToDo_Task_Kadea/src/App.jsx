
import { Children, createContext, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import tasks from "./models/Tasks.json";

export const lists = createContext();



function App() {
  const [newList,setNewList ]= useState(tasks);
  return (
    <div>
      <lists.Provider value={{newList, setNewList}}>
        <Outlet />
      </lists.Provider> 
    </div>
  )
}

export default App
