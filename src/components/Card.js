import React from 'react';

export default function Card(props) {
    const numberPattern = /\d+/g;
    return(
        <button id={props.image.match(numberPattern)} onClick={props.updateScoreKeeper}>
            <img src={props.image} id={props.image.match(numberPattern)}></img>
        </button>    
    )
}
