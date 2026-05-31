import React, { useState } from 'react'
import ProductsPage from './ProductsListingPage/ProductsPage'
import Navbar from './Navbar/Navbar'

const App = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <Navbar inputValue={inputValue} setInputValue={setInputValue}/>
      <ProductsPage inputValue={inputValue} />
    </div>
  )
}

export default App
