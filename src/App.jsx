
import './App.css'
import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'

// variabile rotte router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pokemon/:id',  
    element: <PokemonDetails />  
  },
]);



function App() {


  return (
    // provider
  <RouterProvider router={router}/>

  )
}

export default App
