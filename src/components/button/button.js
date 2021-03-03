import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export default function Button (props) {
    return (
        <button className = {`button button__${props.theme}`} onClick = {props.onClick}>{props.name}</button>
    );
}

Button.propTypes = {
    theme: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string
};
