import React from 'react';
// import PropTypes from 'prop-types';
import './statistic-category-wrapper.scss';
import StatisticContainer from '../statistic-container/statistic-container';

export default function StatisticCategoryWrapper (props) {
    const scores = props.scoresArray.map((item) => {
        return (
            <StatisticContainer date = {item.date}
                turns = {item.turns} />
        );
    });
    return (
        <div className = "statistic-category-wrapper">
            <span>This is statistic for {props.difficulty} pairs of cards</span>
            {scores}
        </div>
    );
}
