import React from 'react'
import './Navbar.css'

const Navbar = ({ inputValue, setInputValue }) => {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <h1>Cocktails</h1>
        </div>
        <div className='search-container'>
            <input 
                className='search'
                type="text"
                placeholder="Search products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>

    </div>
    
    </>
  )
}

export default Navbar