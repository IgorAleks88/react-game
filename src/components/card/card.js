import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

export default function Card (props) {
    function clickHandler (index) {
        if (props.gameArray[index].isActive && !props.secondOpened) {
            props.incrementTurnsCounter();
            const newGameArray = props.gameArray.slice();
            newGameArray[index].isRotate = true;
            if (props.firstOpened) {
                props.changeSecondOpened(index);
                if (props.gameArray[props.firstOpened].item === props.gameArray[index].item) {
                    newGameArray[index].isActive = false;
                    newGameArray[props.firstOpened].isActive = false;
                    props.changeFirstOpened(null);
                    props.changeSecondOpened(null);
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

    // function frontClick (e) {
    //     const container = e.target.closest('.card-container');
    //     if (container.dataset.active === true) {
    //         container.classList.remove('card-container__rotate');
    //     }
    // }

    // function backClick (e) {
    //     const container = e.target.closest('.card-container');
    //     if (container.dataset.active && !props.secondOpened) {
    //         props.incrementTurnsCounter();
    //         container.classList.add('card-container__rotate');
    //         if (props.firstOpened) {
    //             props.changeSecondOpened(container);
    //             if (container.dataset.item === props.firstOpened.dataset.item) {
    //                 container.dataset.active = false;
    //                 props.firstOpened.dataset.active = false;
    //                 props.changeFirstOpened(null);
    //                 props.changeSecondOpened(null);
    //                 // eslint-disable-next-line max-depth
    //                 if (props.victoryCheck()) {
    //                     console.log("You win!");
    //                 }
    //             } else {
    //                 setTimeout(() => {
    //                     container.classList.remove('card-container__rotate');
    //                     props.firstOpened.classList.remove('card-container__rotate');
    //                     props.changeFirstOpened(null);
    //                     props.changeSecondOpened(null);
    //                 }, 1000);
    //             }
    //         } else {
    //             props.changeFirstOpened(container);
    //         }
    //     }
    // }
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
    changeSecondOpened: PropTypes.func,
    category: PropTypes.string,
    gameArray: PropTypes.array,
    firstOpened: PropTypes.object,
    incrementTurnsCounter: PropTypes.func,
    item: PropTypes.string,
    victoryCheck: PropTypes.func,
    secondOpened: PropTypes.object
};
