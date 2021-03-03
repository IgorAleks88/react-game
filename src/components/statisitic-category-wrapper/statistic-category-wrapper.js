import React from 'react';
// import PropTypes from 'prop-types';
import './statistic-category-wrapper.scss';
import StatisticHeader from '../statistic-header/statistic-header';
import StatisticContainer from '../statistic-container/statistic-container';

export default function StatisticCategoryWrapper (props) {
    const scores = props.scoresArray.sort((a, b) => {return (a.turns > b.turns) ? 1 : -1;}).map((item) => {
        return (
            <StatisticContainer date = {item.date}
                turns = {item.turns}
                theme = {props.theme}/>
        );
    });
    return (
        <div className = "statistic-category-wrapper">
            <StatisticHeader theme = {props.theme}
                difficulty = {props.difficulty}/>
            {scores}
        </div>
    );
}
