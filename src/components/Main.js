import React, { useState, useEffect } from 'react';
import CardGrid from './CardGrid';
import randomNumber from '../utils/randomNumber';
import generatePokemon from '../utils/pokemon';

export default function Main(props) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [scoreKeeper, setScoreKeeper] = useState([]);
    const [activePokemonArray, setActivePokemonArray] = useState([]);
    useEffect(() => {
        generateArray();
    }, [])

    //Get list of 20 pokemon to use
    const pokemon = generatePokemon(20);

    //Pick 4 of them for display
    const generateArray = (() => {
        const array = [];
        for (let i = 1; i < 7; i++) {
            let number = randomNumber(20);
            while (array.includes(pokemon[number])) {
                number = randomNumber(20);
            }
            array.push(pokemon[number]);
        }
        setActivePokemonArray(array);
    })

    const updateScoreKeeper = (e) => {
        const number = e.target.id;
        if (scoreKeeper.includes(number)) {
            if(highScore < score) {
                setHighScore(score);
            }
            setScore(0);
            setScoreKeeper([]);
            //run reset game here
            return false;
        } else {
            setScoreKeeper(scoreKeeper => [...scoreKeeper, number])
            setScore(score + 1);
            generateArray();
        }
    }

    const onResetClick = () => {
        setHighScore(0);
        setScore(0);
    };

    return (
        <main>
            <h1>This is a game of memory</h1>
            <CardGrid items={props.items} updateScoreKeeper={updateScoreKeeper} images={activePokemonArray}/>
            <div className="controls">
                <p>Score: {score}</p>
                <p>High score: {highScore}</p>
                <button onClick={onResetClick}>Reset</button>
            </div>
        </main>
    )
}
