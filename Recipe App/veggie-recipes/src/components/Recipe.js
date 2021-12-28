import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {

    let newCalories = (parseFloat(calories)).toFixed(2)

    return (
        <div className={style.recipe}>
            <h1 className={style.title}> {title} </h1> 
            <ul> 
                {ingredients.map(ingredient => (
                    <li> {ingredient.text} </li>
                ))} 
            </ul> 
            <p> Calories: {newCalories} </p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe