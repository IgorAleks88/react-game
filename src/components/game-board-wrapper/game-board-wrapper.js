import React from 'react';
import PropTypes from 'prop-types';
import './game-board-wrapper.scss';
import Card from '../card/card';

export default function GameBoardWrapper (props) {
    const category = props.category;
    const cardElements = props.gameArray.map((item, index) => {
        return (
            <Card key = {index}
                gameArray = {props.gameArray}
                index = {index}
                item = {item.item}
                isActive = {item.isActive}
                isRotate = {item.isRotate}
                category = {category}
                changeHidden = {props.changeHidden}
                changeGameArray = {props.changeGameArray}
                changeFirstOpened= {props.changeFirstOpened}
                difficulty = {props.difficulty}
                firstOpened = {props.firstOpened}
                changeSecondOpened = {props.changeSecondOpened}
                secondOpened = {props.secondOpened}
                theme = {props.theme}
                turnsCounter = {props.turnsCounter}
                incrementTurnsCounter = {props.incrementTurnsCounter}
                victoryCheck = {props.victoryCheck}/>
        );
    });
    return (
        <div className = {props.gameWrapperClass}>
            {cardElements}
        </div>
    );
}

GameBoardWrapper.propTypes = {
    changeHidden: PropTypes.func,
    changeGameArray: PropTypes.func,
    changeFirstOpened: PropTypes.func,
    changeSecondOpened: PropTypes.func,
    category: PropTypes.string,
    cards: PropTypes.array,
    difficulty: PropTypes.number,
    firstOpened: PropTypes.object,
    gameArray: PropTypes.array,
    gameWrapperClass: PropTypes.string,
    incrementTurnsCounter: PropTypes.func,
    victoryCheck: PropTypes.func,
    secondOpened: PropTypes.object,
    theme: PropTypes.string,
    turnsCounter: PropTypes.number
};
