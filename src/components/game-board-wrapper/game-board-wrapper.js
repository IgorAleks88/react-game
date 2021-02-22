import React from 'react';
import './game-board-wrapper.scss';
import Card from '../card/card';

export default function GameBoardWrapper (props) {
    const category = props.category;
    const cardElements = props.cards.map((item) => {
        return (
            <Card item = {item} category = {category}/>
        );
    });
    return (
        <div className = "game-board-wrapper">
            {cardElements}
        </div>
    );
}
