import React from 'react';
import style from './Recipe.module.css';

const Recipe = (props) => {
    return(
        <>
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map((val, ind) => (
                    <li key={ind}>
                        {val.text}
                    </li>
                ))}
            </ol>
            <p className="text-secondary font-monospace">Calories: {props.calories}</p>
            <img className={style.image} src={props.imagesrc} alt="Recipe" />
        </div>
        </>
    );
}

export default Recipe;