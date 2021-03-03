import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './options-wrapper.scss';
import Button from '../button/button';
import OptionsCategoryWrapper from '../options-category-wrapper/options-category-wrapper';
import ReactAudioPlayer from 'react-audio-player';

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
        <div className = {`options-wrapper options-wrapper__${props.theme}`}>
            <div className = "options-category-wrapper">
                <span>Turns: {props.turnsCounter}</span>
            </div>
            <div className = "options-category-wrapper">
                <span>Game</span>
                <Link to="/game">
                    <Button name = "Start"
                        theme = {props.theme}
                        onClick = {() => props.startNewGame()}/>
                </Link>

                <Button name = "Autoplay"
                    theme = {props.theme}
                    onClick = {() => props.autoPlay(props.gameArray, props.changeGameArray)}/>
            </div>
            <OptionsCategoryWrapper
                theme = {props.theme}
                setShouldStart = {props.setShouldStart}
                categoryName = "Field size"
                buttons = {fieldSizeButtons}/>
            <OptionsCategoryWrapper
                theme = {props.theme}
                setShouldStart = {props.setShouldStart}
                categoryName = "Category"
                buttons = {categoryButtons}/>
            <OptionsCategoryWrapper
                theme = {props.theme}
                categoryName = "Interface"
                buttons = {interfaceButtons}/>
            <div className = "options-category-wrapper">
                <span>Music</span>
                <ReactAudioPlayer src={`../assets/sound/${props.category}/music.mp3`}
                    autoPlay
                    controls/>
            </div>
            <div className = "options-category-wrapper">
                <Link to="/stat">
                    <Button name = "Statistic"
                        theme = {props.theme} />
                </Link>
            </div>
        </div>
    );
}

OptionsWrapper.propTypes = {
    autoPlay: PropTypes.func,
    startNewGame: PropTypes.func,
    category: PropTypes.string,
    changeCategory: PropTypes.func,
    changeDifficulty: PropTypes.func,
    changeGameArray: PropTypes.func,
    changeInterface: PropTypes.func,
    gameArray: PropTypes.array,
    optionsWrapperClass: PropTypes.string,
    turnsCounter: PropTypes.number,
    theme: PropTypes.string,
    setShouldStart: PropTypes.bool
};
