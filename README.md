# Product Listing App

A React-based Product Listing Application that displays cocktail products using TheCocktailDB API. The application allows users to browse drinks, search by name, and filter products by category.

## Features

* View a list of cocktail products
* Search drinks by name
* Filter drinks by category
* Responsive product card layout
* Loading and error handling
* Dynamic data fetching using Axios
* Real-time updates based on user input

## Live Demo

https://products-listing-app-theta.vercel.app/

## Technologies Used

* React.js
* JavaScript (ES6+)
* Axios
* CSS3
* TheCocktailDB API

## API Endpoints

### Search Drinks by Name

```url
`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
```

Example:

```url
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
```

### Filter Drinks by Category

```url
`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
```

Example:

```url
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
```

## Application Flow

1. Application loads initial cocktail data.
2. User enters a drink name in the search box.
3. Search API fetches matching drinks.
4. User selects a category from the dropdown.
5. Category API fetches drinks belonging to the selected category.
6. Results are displayed as product cards with image and name.

## State Management

The application uses React Hooks:

* `useState` for managing:

  * Product data
  * Search input
  * Selected category
  * Loading state
  * Error state

* `useEffect` for:

  * Fetching data when search input changes
  * Fetching data when category changes

## User Interface

### Search Input

Allows users to search cocktails by name.

### Category Dropdown

Provides category-based filtering such as:

* Cocktail
* Ordinary Drink
* Shake
* Shot
* Coffee / Tea
* Punch / Party Drink
* Beer
* Soft Drink / Soda

### Product Cards

Each card displays:

* Product image
* Product name

## Error Handling

* Displays loading indicator while fetching data.
* Shows error messages if API requests fail.
* Handles empty search results gracefully.

## Future Enhancements

* Pagination
* Sorting options
* Product details page
* Favorites functionality
* Debounced search input
* Advanced filtering options

## Author

**Raghavendra Karingu**

Frontend Developer specializing in React.js and modern JavaScript applications.
