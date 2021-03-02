/* eslint-disable max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';
import writeResultToStorage from '../../utils/writeResultToStorage';

export default function Card (props) {
    function clickHandler (index) {
        if (props.gameArray[index].isActive && !props.secondOpened && (typeof (props.secondOpened) !== 'number')) {
            props.incrementTurnsCounter();
            const newGameArray = props.gameArray.slice();
            newGameArray[index].isRotate = true;
            props.changeGameArray(newGameArray);
            if (typeof (props.firstOpened) === 'number') {
                props.changeSecondOpened(index);
                if (props.gameArray[props.firstOpened].item === props.gameArray[index].item) {
                    newGameArray[index].isActive = false;
                    newGameArray[props.firstOpened].isActive = false;
                    props.changeFirstOpened(null);
                    props.changeSecondOpened(null);
                    if (props.victoryCheck(newGameArray)) {
                        writeResultToStorage(props.difficulty, props.turnsCounter);
                    }
                } else {
                    setTimeout(() => {
                        newGameArray[index].isRotate = false;
                        newGameArray[props.firstOpened].isRotate = false;
                        props.changeFirstOpened(null);
                        props.changeSecondOpened(null);
                    }, 1000);
                }
            } else {
                props.changeFirstOpened(index);
            }
            props.changeGameArray(newGameArray);
        }
    }

    return (
        <div className = {props.isRotate ? "card-container card-container__rotate" : "card-container"}
            onClick = {() => {clickHandler(props.index);}}>
            <div className = "card-front"
                style = {{ backgroundImage: `url(/assets/img/${props.category}/${props.item}.png)` }}
            />
            <div className = "card-back"
                style = {{ backgroundImage: `url(/assets/img/${props.category}/background.png)` }}
            />
        </div>
    );
}

Card.propTypes = {
    changeFirstOpened: PropTypes.func,
    changeGameArray: PropTypes.func,
    changeSecondOpened: PropTypes.func,
    category: PropTypes.string,
    gameArray: PropTypes.array,
    firstOpened: PropTypes.object,
    incrementTurnsCounter: PropTypes.func,
    index: PropTypes.number,
    isRotate: PropTypes.bool,
    item: PropTypes.string,
    victoryCheck: PropTypes.func,
    secondOpened: PropTypes.object
};
