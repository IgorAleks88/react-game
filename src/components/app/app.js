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
    const [difficulty, setDifficulty] = useState(9);
    const [firstOpened, setFirstOpened] = useState(null);

    function changeDifficulty (num) {
        setDifficulty(num);
    }

    function changeCategory (name) {
        setCategory(name);
    }

    function changeFirstOpened (card) {
        setFirstOpened(card);
    }

    function startNewGame () {
        let termArr = shuffleArray(cardsArray).slice(0, difficulty);
        termArr = termArr.concat(termArr);
        setGameArray(shuffleArray(termArr));
        const wrapper = document.querySelector('.game-board-wrapper');
        wrapper.classList.remove('game-board-wrapper__12');
        wrapper.classList.remove('game-board-wrapper__18');
        wrapper.classList.remove('game-board-wrapper__24');
        wrapper.classList.add(`game-board-wrapper__${difficulty * 2}`);
    }
    return (
        <div className = "main-wrapper">
            <OptionsWrapper
                changeDifficulty = {changeDifficulty}
                changeCategory = {changeCategory}
                category = {category}
                startNewGame = {startNewGame}/>
            <GameBoardWrapper cards = {gameArray}
                category = {category}
                changeFirstOpened= {changeFirstOpened}
                firstOpened = {firstOpened}/>
        </div>
    );
}
