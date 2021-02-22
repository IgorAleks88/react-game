import React, { useState } from 'react';
// import ReactDOM from "react-dom";
import OptionsWrapper from '../options-wrapper/options-wrapper';
import GameBoardWrapper from '../game-board-wrapper/game-board-wrapper';
import shuffleArray from '../../utils/shuffleArray';

export default function App () {
    const cardsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
        '10', '11', '12', '13', '14', '15', '16', '17', '18'];
    const [gameArray, setGameArray] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9',
        '10', '11', '12', '13', '14', '15', '16', '17', '18']);
    const [category, setCategory] = useState('football');

    function changeCategory (name) {
        setCategory(name);
    }

    function createNewGameArray () {
        setGameArray(shuffleArray(cardsArray));
    }
    return (
        <div className = "main-wrapper">
            <OptionsWrapper
                setCategory = {changeCategory}
                category = {category}
                createNewGame = {createNewGameArray}/>
            <GameBoardWrapper cards = {gameArray} category = {category} />
        </div>
    );
}
