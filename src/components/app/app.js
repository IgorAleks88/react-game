import React, { useState } from 'react';
// import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import OptionsWrapper from '../options-wrapper/options-wrapper';
import GameBoardWrapper from '../game-board-wrapper/game-board-wrapper';
import StatisticWrapper from '../statistic/statistic';
import shuffleArray from '../../utils/shuffleArray';
import autoPlay from '../../utils/autoPlay';

export default function App () {
    const cardsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
        '10', '11', '12', '13', '14', '15', '16', '17', '18'];
    const [gameArray, setGameArray] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
    const [category, setCategory] = useState('football');
    const [difficulty, setDifficulty] = useState(12);
    const [firstOpened, setFirstOpened] = useState(null);
    const [secondOpened, setSecondOpened] = useState(null);
    const [turnsCounter, setTurnsCounter] = useState(0);

    function changeDifficulty (num) {
        setDifficulty(num);
    }

    function changeCategory (name) {
        setCategory(name);
    }

    function changeFirstOpened (card) {
        setFirstOpened(card);
    }

    function changeSecondOpened (card) {
        setSecondOpened(card);
    }

    function incrementTurnsCounter () {
        setTurnsCounter(turnsCounter + 1);
    }

    function startNewGame () {
        // shuffle game array

        let termArr = shuffleArray(cardsArray).slice(0, difficulty);
        termArr = termArr.concat(termArr);
        setGameArray(shuffleArray(termArr));

        // change game wrapper style depends on difficulty level

        const wrapper = document.querySelector('.game-board-wrapper');
        if (wrapper) {
            wrapper.classList.remove('game-board-wrapper__12');
            wrapper.classList.remove('game-board-wrapper__18');
            wrapper.classList.remove('game-board-wrapper__24');
            wrapper.classList.add(`game-board-wrapper__${difficulty * 2}`);
        }

        // set all cards data-active true
        const cardObjects = document.querySelectorAll('.card-container');
        Object.keys(cardObjects).forEach((card) => {
            cardObjects[card].dataset.active = true;
            cardObjects[card].classList.remove('card-container__rotate');
        });

        setTurnsCounter(0);
    }
    return (
        <Router>
            <div className = "main-wrapper">
                <OptionsWrapper
                    changeDifficulty = {changeDifficulty}
                    changeCategory = {changeCategory}
                    category = {category}
                    autoPlay = {autoPlay}
                    gameArray = {gameArray}
                    startNewGame = {startNewGame}
                    turnsCounter = {turnsCounter}/>
                <Switch>
                    <Route path = "/game">
                        <GameBoardWrapper cards = {gameArray}
                            category = {category}
                            changeFirstOpened= {changeFirstOpened}
                            firstOpened = {firstOpened}
                            changeSecondOpened = {changeSecondOpened}
                            secondOpened = {secondOpened}
                            incrementTurnsCounter = {incrementTurnsCounter}/>
                    </Route>
                    <Route path = "/stat">
                        <StatisticWrapper />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
