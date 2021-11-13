import React from "react";
import './Card-List.style.css'
import { Card } from '../Card Component/Card.component'

export const CardList = props => (
<div className='card-list'>
    {props.monst.map(monster=>
        <Card key={monster.id} mons={monster}/>
        )}
</div>
)