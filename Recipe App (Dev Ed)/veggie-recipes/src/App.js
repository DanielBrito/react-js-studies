import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe'

const App = () => {

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')

    const APP_ID = 'b026f8d1'
    const APP_KEY = '1a712ca5c4c7eaafef7eb420a8d66e09'
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    useEffect(() => {
       getRecipes() 
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(url)
        const data = await response.json()
        
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = event => {
        setSearch(event.target.value)
    }

    const getSearch = event => {
        event.preventDefault();
        setQuery(search)
        setSearch('')
    }

    return(
        <div className="App">
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">SEARCH RECIPE</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe 
                        key={recipe.recipe.label}
                        title={recipe.recipe.label} 
                        calories={recipe.recipe.calories} 
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        />
                ))}
            </div>            
        </div>
    )
}

export default App;
