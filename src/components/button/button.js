import React from 'react';
import './button.scss';

export default function Button (props) {
    return (
        <button className = {`button button__${props.theme}`} onClick = {props.onClick}>{props.name}</button>
    );
}
