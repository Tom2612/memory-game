import React, { useState } from 'react';

export default function Main() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const onHandleClick = () => {
        setScore(score + 1);
    };

    const onScoreSetClick = () => {
        setHighScore(score);
        setScore(0);
    };
    const onResetClick = () => {
        setHighScore(0);
        setScore(0);
    };

    return (
        <main>
            <h1>This is a game of memory</h1>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'></img>
            <p>main content</p>
            <p>Score: {score}</p>
            <p>High score: {highScore}</p>
            <button onClick={onHandleClick}>Add to score</button>
            <button onClick={onScoreSetClick}>Set high score</button>
            <button onClick={onResetClick}>Reset</button>
        </main>
        
    )
}