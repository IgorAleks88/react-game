import React from 'react';
import './game-board-wrapper.scss';
import Card from '../card/card';

export default function GameBoardWrapper (props) {
    const cardElements = props.cards.map((color) => {
        return (
            <Card color = {color}/>
        );
    });
    return (
        <div className = "game-board-wrapper">
            {cardElements}
        </div>
    );
}
