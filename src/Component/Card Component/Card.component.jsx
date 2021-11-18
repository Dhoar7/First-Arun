import React from "react";
import './Card.style.css'

export const Card = props=>(
    <div className='card-container'>
        <img alt='Source' src= {`https://robohash.org/${props.mons.id}?set=set2&size=180x180`}/>
        <h2>{props.mons.name}</h2>
        <p>{props.mons.email}</p>
    </div>
)