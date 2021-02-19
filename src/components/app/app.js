import React from 'react';
// import ReactDOM from "react-dom";
import OptionsWrapper from '../options-wrapper/options-wrapper';
import GameBoardWrapper from '../game-board-wrapper/game-board-wrapper';

const cardsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

export default function App () {
    return (
        <div className = "main-wrapper">
            <OptionsWrapper />
            <GameBoardWrapper cards = {cardsArray} />
        </div>
    );
}
