import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './options-wrapper.scss';
import Button from '../button/button';
import OptionsCategoryWrapper from '../options-category-wrapper/options-category-wrapper';

export default function OptionsWrapper (props) {
    const fieldSizeButtons = [
        { name: 'S', onClick: props.changeDifficulty },
        { name: 'M', onClick: props.changeDifficulty },
        { name: 'L', onClick: props.changeDifficulty }
    ];
    const categoryButtons = [
        { name: 'football', onClick: props.changeCategory },
        { name: 'cars', onClick: props.changeCategory }
    ];
    const interfaceButtons = [
        { name: 'dark', onClick: props.changeInterface },
        { name: 'light', onClick: props.changeInterface }
    ];

    return (
        <div className = {props.optionsWrapperClass}>
            <div className = "options-category-wrapper">
                <span>Turns: {props.turnsCounter}</span>
            </div>
            <div className = "options-category-wrapper">
                <span>Game</span>
                <Link to="/game">
                    <Button name = "Start"
                        onClick = {() => props.startNewGame()}/>
                </Link>

                <Button name = "Autoplay"
                    onClick = {() => props.autoPlay(props.gameArray)}/>
            </div>
            <OptionsCategoryWrapper
                categoryName = "Field size"
                buttons = {fieldSizeButtons}/>
            <OptionsCategoryWrapper
                categoryName = "Category"
                buttons = {categoryButtons}/>
            <OptionsCategoryWrapper
                categoryName = "Interface"
                buttons = {interfaceButtons}/>
            <div className = "options-category-wrapper">
                <span>Audio</span>
            </div>
            <div className = "options-category-wrapper">
                <Link to="/stat">
                    <Button name = "Statistic" />
                </Link>
            </div>
        </div>
    );
}

OptionsWrapper.propTypes = {
    autoPlay: PropTypes.func,
    startNewGame: PropTypes.func,
    changeCategory: PropTypes.func,
    changeDifficulty: PropTypes.func,
    changeInterface: PropTypes.func,
    gameArray: PropTypes.array,
    optionsWrapperClass: PropTypes.string,
    turnsCounter: PropTypes.number
};
