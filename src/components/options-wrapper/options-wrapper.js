import React from 'react';
import './options-wrapper.scss';
import Button from '../button/button';

export default function OptionsWrapper (props) {
    return (
        <div className = "options-wrapper">
            <span>This is options wrapper</span>
            <Button name = "Start"
                onClick = {() => props.createNewGame()}/>
            <Button name = "Football"
                onClick = {() => {
                    props.setCategory('football');
                    // console.log(props.category);
                }}/>
            <Button name = "Cars"
                onClick = {() => props.setCategory('cars')}/>
            <span>{props.category}</span>
        </div>
    );
}
