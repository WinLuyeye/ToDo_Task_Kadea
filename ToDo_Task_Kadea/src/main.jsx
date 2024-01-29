import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import List from './composants/List.jsx'
import NewTask from './composants/NewTask.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element : <App />,
      errorElement: <h2 className='text-red-700 font-bold text-3xl'>Désolé Cette Page n'existe pas</h2> ,
      children: [
        {
          path: "/",
          element: <List />,
        },
        {
          path: "/newtask",
          element: <NewTask />,
        }
      ]
    },
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
