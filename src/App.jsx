import React from 'react'
import Products from './components/Products.jsx/Products'
import { Route, Routes } from 'react-router-dom'
import AddedCarts from './components/addedCarts/AddedCarts'
import Navbar from './components/nav/Navbar'

const App = () => {
  return (
    <>
      {/* Navbar Start*/}
      <Navbar />
      {/* Navbar End*/}

      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/addedCarts' element={<AddedCarts />} />
      </Routes>

    </>


  )
}

export default App