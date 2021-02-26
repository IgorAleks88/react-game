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
            <span>Turns: {props.turnsCounter}</span>
            <Link to="/game">
                <Button name = "Start"
                    onClick = {() => props.startNewGame()}/>
            </Link>
            {/*<Button name = "Football"
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
            onClick = {() => props.changeDifficulty(12)}/> */}
            <Button name = "Autoplay"
                onClick = {() => props.autoPlay(props.gameArray)}/>

            <OptionsCategoryWrapper
                categoryName = "Field size"
                buttons = {fieldSizeButtons}/>
            <OptionsCategoryWrapper
                categoryName = "Category"
                buttons = {categoryButtons}/>
            <OptionsCategoryWrapper
                categoryName = "Interface"
                buttons = {interfaceButtons}/>
            <Link to="/stat">
                <Button name = "Statistic" />
            </Link>
        </div>
    );
}

OptionsWrapper.propTypes = {
    startNewGame: PropTypes.func,
    changeCategory: PropTypes.func,
    changeDifficulty: PropTypes.func,
    turnsCounter: PropTypes.number
};
