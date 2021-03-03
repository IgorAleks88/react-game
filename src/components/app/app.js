import React, { useEffect, useState } from 'react';
import {
    HashRouter as Router,
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
import VictoryMessage from '../victory-message/victory-message';

export default function App () {
    const [gameArray, setGameArray] = useState([]);
    const [category, setCategory] = useState('football');
    const [difficulty, setDifficulty] = useState(12);
    const [firstOpened, setFirstOpened] = useState(null);
    const [secondOpened, setSecondOpened] = useState(null);
    const [turnsCounter, setTurnsCounter] = useState(0);
    const [theme, setTheme] = useState('light');
    const [gameWrapperClass, setGameWrapperClass] = useState('game-board-wrapper game-board-wrapper__24');
    const [optionsWrapperClass, setOptionsWrapperClass] = useState('options-wrapper options-wrapper__light');
    const [footerWrapperClass, setFooterWrapperClass] = useState('footer-wrapper footer-wrapper__light');
    const [shouldStart, setShouldStart] = useState(false);
    const [hidden, setHidden] = useState('hidden');

    useEffect(() => {
        document.addEventListener('keypress', keyPressHandler);
        loadStateFromStorage();
        return () => {
            document.removeEventListener('keypress', keyPressHandler);
        };
    }, []);

    useEffect(() => {
        if (shouldStart) {
            startNewGame();
        }
    }, [difficulty, category, shouldStart]);

    useEffect(() => {
        writeStateToStorage();
    });

    function writeStateToStorage () {
        const gameState = {
            gameArray: gameArray,
            category: category,
            difficulty: difficulty,
            firstOpened: firstOpened,
            secondOpened: secondOpened,
            turnsCounter: turnsCounter,
            gameWrapperClass: gameWrapperClass,
            optionsWrapperClass: optionsWrapperClass,
            footerWrapperClass: footerWrapperClass
        };
        localStorage.setItem('gameState', JSON.stringify(gameState));
    }

    function loadStateFromStorage () {
        const gameState = JSON.parse(localStorage.getItem('gameState'));
        setGameArray(gameState.gameArray);
        setCategory(gameState.category);
        setDifficulty(gameState.difficulty);
        setFirstOpened(gameState.firstOpened);
        setSecondOpened(gameState.secondOpened);
        setTurnsCounter(gameState.turnsCounter);
        setGameWrapperClass(gameState.gameWrapperClass);
        setOptionsWrapperClass(gameState.optionsWrapperClass);
        setFooterWrapperClass(gameState.footerWrapperClass);
        setShouldStart(false);
    }

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
        setTheme(name);
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

    function changeHidden (str) {
        setHidden(str);
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
                    theme = {theme}
                    changeInterface = {changeInterface}
                    changeGameArray = {changeGameArray}
                    category = {category}
                    autoPlay = {autoPlay}
                    gameArray = {gameArray}
                    startNewGame = {startNewGame}
                    setShouldStart = {setShouldStart}
                    turnsCounter = {turnsCounter}/>
                <Switch>
                    <Route path = "/game">
                        <GameBoardWrapper gameArray = {gameArray}
                            category = {category}
                            changeGameArray = {changeGameArray}
                            changeFirstOpened= {changeFirstOpened}
                            changeHidden = {changeHidden}
                            difficulty = {difficulty}
                            firstOpened = {firstOpened}
                            changeSecondOpened = {changeSecondOpened}
                            secondOpened = {secondOpened}
                            incrementTurnsCounter = {incrementTurnsCounter}
                            theme = {theme}
                            turnsCounter = {turnsCounter}
                            victoryCheck = {victoryCheck}
                            gameWrapperClass = {gameWrapperClass}/>
                    </Route>
                    <Route path = "/stat">
                        <StatisticWrapper theme = {theme}/>
                    </Route>
                </Switch>
                <VictoryMessage theme = {theme}
                    hidden = {hidden}/>
                <FooterWrapper theme = {theme} />
            </div>
        </Router>
    );
}
