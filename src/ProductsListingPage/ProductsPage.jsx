import React, { useState, useEffect } from 'react'
import './ProductsPage.css'
import axios from 'axios';

const ProductsPage = ({ inputValue }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        
        const fetchData = async () =>{
            const query = inputValue ? inputValue : 'a';
            try{
                setLoading(true);

                let url = "";
                
                if(selectedCategory === "All"){
                    const query = inputValue || "a";
                    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
                } else {
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

                }

                const response = await axios.get(url);
                setData(response.data.drinks || []);
            } catch (error){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [inputValue, selectedCategory])

    // const filteredData = 
    //   selectedCategory == "All" ? data 
    //   : data.filter((product)=> product.strCategory == selectedCategory);

    const filteredData = data.filter((item) =>
  item.strDrink.toLowerCase().includes(inputValue.toLowerCase())
);


  return (
    <div>
        <div className='filter-container'>
        <label>Filtered by Category: </label>
        <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Shake">Shake</option>
          <option value="Punch / Party Drink">Punch / Party Drink</option>
          <option value="Shot">Shot</option>
          <option value="Other / Unknown">Other / Unknown</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Coffee / Tea">Coffee / Tea</option>
        </select>
        </div>
        <hr/>
        {loading && <p className='no-results'>Loading....</p>}
        {error && <p>{error}</p>}
        {   
            !loading && (
                filteredData.length > 0 ? ( 
                    <div className='products-container'>
                    {
                        data.map((item) => {
                            const {idDrink, strDrink, strDrinkThumb} = item;
                            return (
                                <div key={idDrink} className='product-card'>
                                    <div className='image-container'>
                                        <img src={strDrinkThumb} alt={strDrink} className='product-image' />
                                    </div>
                                    <p className='product-name'>{strDrink}</p>
                                </div>
                            )
                        })
                    }
                   </div>
                ) : (
                    <p className='no-results'>No results found</p>
                )
            )
        }
        
    </div>
  )
}

export default ProductsPage