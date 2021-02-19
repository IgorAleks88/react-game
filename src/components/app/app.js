import React from 'react';
// import ReactDOM from "react-dom";
import OptionsWrapper from '../options-wrapper/options-wrapper';
import GameBoardWrapper from '../game-board-wrapper/game-board-wrapper';

const cardsArray = ['red', 'yellow', 'blue', 'tomato', 'grey', 'orange', 'red', 'yellow', 'blue', 'tomato', 'grey', 'orange'];

export default function App () {
    return (
        <div className = "main-wrapper">
            <OptionsWrapper />
            <GameBoardWrapper cards = {cardsArray} />
        </div>
    );
}
