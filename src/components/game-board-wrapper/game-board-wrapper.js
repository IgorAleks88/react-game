import React from 'react';
import PropTypes from 'prop-types';
import './game-board-wrapper.scss';
import Card from '../card/card';

export default function GameBoardWrapper (props) {
    const category = props.category;
    const cardElements = props.cards.map((item, index) => {
        return (
            <Card key = {index}
                item = {item}
                category = {category}
                changeFirstOpened= {props.changeFirstOpened}
                firstOpened = {props.firstOpened}
                changeSecondOpened = {props.changeSecondOpened}
                secondOpened = {props.secondOpened}
                incrementTurnsCounter = {props.incrementTurnsCounter}
                victoryCheck = {props.victoryCheck}/>
        );
    });
    return (
        <div className = "game-board-wrapper game-board-wrapper__24">
            {cardElements}
        </div>
    );
}

GameBoardWrapper.propTypes = {
    changeFirstOpened: PropTypes.func,
    changeSecondOpened: PropTypes.func,
    category: PropTypes.string,
    cards: PropTypes.array,
    firstOpened: PropTypes.object,
    incrementTurnsCounter: PropTypes.func,
    victoryCheck: PropTypes.func,
    secondOpened: PropTypes.object
};
