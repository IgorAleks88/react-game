import React from 'react';
// import PropTypes from 'prop-types';
import './victory-message.scss';

export default function VictoryMessage (props) {
    return (
        <div
            className = {`victory-message-container victory-message-container__${props.theme} ${props.hidden}`}>
            This is victory message</div>
    );
}
