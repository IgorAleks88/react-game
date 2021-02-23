import React from 'react';
import './game-board-wrapper.scss';
import Card from '../card/card';

export default function GameBoardWrapper (props) {
    const category = props.category;
    const cardElements = props.cards.map((item) => {
        return (
            <Card item = {item}
                category = {category}
                changeFirstOpened= {props.changeFirstOpened}
                firstOpened = {props.firstOpened}
                changeSecondOpened = {props.changeSecondOpened}
                secondOpened = {props.secondOpened}/>
        );
    });
    return (
        <div className = "game-board-wrapper game-board-wrapper__18">
            {cardElements}
        </div>
    );
}
