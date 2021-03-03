import React from 'react';
// import PropTypes from 'prop-types';
import './victory-message.scss';
import Button from '../button/button';

export default function VictoryMessage (props) {
    return (
        <div
            className = {`victory-message-container victory-message-container__${props.theme} ${props.hidden}`}>
            <span className = {"victory-message-header"}>You win!</span>
            <span className = {"victory-message-counter"}>Turns: {props.turnsCounter}</span>
            <Button theme = {props.theme}
                name = {'Close'}
                onClick = {() => {props.changeHidden('hidden'); props.startNewGame();}}/>
        </div>
    );
}
