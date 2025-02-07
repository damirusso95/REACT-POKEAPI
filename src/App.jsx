
import './App.css'
import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

// variabile rotte router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
]);



function App() {


  return (
    // provider
  <RouterProvider router={router}/>



  )
}

export default App
