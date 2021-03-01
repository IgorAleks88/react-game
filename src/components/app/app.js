import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import OptionsWrapper from '../options-wrapper/options-wrapper';
import GameBoardWrapper from '../game-board-wrapper/game-board-wrapper';
import FooterWrapper from '../footer-wrapper/footer-wrapper';
import StatisticWrapper from '../statistic/statistic';
import shuffleArray from '../../utils/shuffleArray';
import autoPlay from '../../utils/autoPlay';
import victoryCheck from '../../utils/victoryCheck';
import cardsArray from '../cardsArray';

export default function App () {
    const [gameArray, setGameArray] = useState([]);
    const [category, setCategory] = useState('football');
    const [difficulty, setDifficulty] = useState(12);
    const [firstOpened, setFirstOpened] = useState(null);
    const [secondOpened, setSecondOpened] = useState(null);
    const [turnsCounter, setTurnsCounter] = useState(0);
    const [gameWrapperClass, setGameWrapperClass] = useState('game-board-wrapper game-board-wrapper__24');
    const [optionsWrapperClass, setOptionsWrapperClass] = useState('options-wrapper options-wrapper__light');
    const [footerWrapperClass, setFooterWrapperClass] = useState('footer-wrapper footer-wrapper__light');

    useEffect(() => {
        startNewGame();
    }, [difficulty, category]);

    useEffect(() => {
        document.addEventListener('keypress', keyPressHandler);
        return () => {
            document.removeEventListener('keypress', keyPressHandler);
        };
    }, []);

    function keyPressHandler (event) {
        const { code } = event;
        switch (code) {
            case 'KeyC': setCategory('cars');
                break;
            case 'KeyF': setCategory('football');
                break;
            case 'KeyS': setDifficulty(6);
                break;
            case 'KeyM': setDifficulty(9);
                break;
            case 'KeyL': setDifficulty(12);
                break;
            default: break;
        }
    }

    function changeDifficulty (num) {
        switch (num) {
            case 'S': setDifficulty(6);
                break;
            case 'M': setDifficulty(9);
                break;
            case 'L': setDifficulty(12);
                break;
        }
    }

    function changeCategory (name) {
        setCategory(name);
    }

    function changeInterface (name) {
        setOptionsWrapperClass(`options-wrapper options-wrapper__${name}`);
        setFooterWrapperClass(`footer-wrapper footer-wrapper__${name}`);
    }

    function changeFirstOpened (card) {
        setFirstOpened(card);
    }

    function changeSecondOpened (card) {
        setSecondOpened(card);
    }

    function changeGameArray (arr) {
        setGameArray(arr);
    }

    function incrementTurnsCounter () {
        setTurnsCounter(turnsCounter + 1);
    }

    function startNewGame () {
        // shuffle game array

        let termArr = shuffleArray(cardsArray).slice(0, difficulty);
        for (let i = 0; i < difficulty; i += 1) {
            const newObj = {
                item: termArr[i].item,
                isActive: termArr[i].isActive,
                isRotate: termArr[i].isRotate
            };
            termArr.push(newObj);
        }

        for (let i = 0; i < termArr; i += 1) {
            termArr[i].isActive = true;
            termArr[i].isRotate = false;
        }

        setGameArray(shuffleArray(termArr));

        // change game wrapper style depends on difficulty level

        setGameWrapperClass(`game-board-wrapper game-board-wrapper__${difficulty * 2}`);

        setTurnsCounter(0);
    }
    return (
        <Router>
            <div className = "main-wrapper">
                <OptionsWrapper
                    optionsWrapperClass = {optionsWrapperClass}
                    changeDifficulty = {changeDifficulty}
                    changeCategory = {changeCategory}
                    changeInterface = {changeInterface}
                    changeGameArray = {changeGameArray}
                    category = {category}
                    autoPlay = {autoPlay}
                    gameArray = {gameArray}
                    startNewGame = {startNewGame}
                    turnsCounter = {turnsCounter}/>
                <Switch>
                    <Route path = "/game">
                        <GameBoardWrapper gameArray = {gameArray}
                            category = {category}
                            changeGameArray = {changeGameArray}
                            changeFirstOpened= {changeFirstOpened}
                            firstOpened = {firstOpened}
                            changeSecondOpened = {changeSecondOpened}
                            secondOpened = {secondOpened}
                            incrementTurnsCounter = {incrementTurnsCounter}
                            victoryCheck = {victoryCheck}
                            gameWrapperClass = {gameWrapperClass}/>
                    </Route>
                    <Route path = "/stat">
                        <StatisticWrapper />
                    </Route>
                </Switch>
                <FooterWrapper footerWrapperClass = {footerWrapperClass} />
            </div>
        </Router>
    );
}
