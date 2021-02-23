import React from 'react';
import PropTypes from 'prop-types';
import './options-wrapper.scss';
import Button from '../button/button';

export default function OptionsWrapper (props) {
    return (
        <div className = "options-wrapper">
            <span>This is options wrapper</span>
            <Button name = "Start"
                onClick = {() => props.startNewGame()}/>
            <Button name = "Football"
                onClick = {() => {
                    props.changeCategory('football');
                }}/>
            <Button name = "Cars"
                onClick = {() => props.changeCategory('cars')}/>
            <Button name = "6"
                onClick = {() => props.changeDifficulty(6)}/>
            <Button name = "9"
                onClick = {() => props.changeDifficulty(9)}/>
            <Button name = "12"
                onClick = {() => props.changeDifficulty(12)}/>
        </div>
    );
}

OptionsWrapper.propTypes = {
    startNewGame: PropTypes.func,
    changeCategory: PropTypes.func,
    changeDifficulty: PropTypes.func
};
