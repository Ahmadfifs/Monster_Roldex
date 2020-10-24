import React from 'react'
import './card-list.css';
import {Card} from '../card/card';


export const CardList = ({ list }) => {

    return(
        <div className='card-list'>
            {
            list.map(result => (
                <Card key={result.id} id={result.id} name={result.name}></Card>
            ))
            }
        </div>
    )
}