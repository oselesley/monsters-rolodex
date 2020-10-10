import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    const { monster } = props;
    return (
        <div className='card-container'>
            <img alt={'monster' + monster.id} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h1>{monster.name}</h1>
            <h3>{monster.email}</h3>
        </div>
    )
}