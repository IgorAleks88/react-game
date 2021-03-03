import React from 'react';
// import PropTypes from 'prop-types';
import './statistic-container.scss';

export default function StatisticContainer (props) {
    return (
        <div className = {`statistic-container statistic-container__${props.theme}`}>
            <div className = {"statistic-date"}>{props.date}</div>
            <div className = {"statistic-turns"}>{props.turns}</div>
        </div>
    );
}
