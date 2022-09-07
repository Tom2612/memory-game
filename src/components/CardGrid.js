import React from 'react';
import Card from './Card';

export default function CardGrid (props) {
    return (
        <div id="grid">
            {props.images.map(image => 
                <Card 
                    updateScoreKeeper={props.updateScoreKeeper} 
                    key={image} 
                    item={image}
                    image={image}
                />
            )}
        </div>
    )
}