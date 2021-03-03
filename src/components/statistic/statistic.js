import React from 'react';
// import PropTypes from 'prop-types';
import './statistic.scss';
import StatisticCategoryWrapper from '../statisitic-category-wrapper/statistic-category-wrapper';


export default function StatisticWrapper (props) {
    let statistic = {
        6: [],
        9: [],
        12: []
    };
    if (localStorage.getItem('gameStatistic')) {
        statistic = JSON.parse(localStorage.getItem('gameStatistic'));
    }
    const categories = Object.keys(statistic).map((item) => {
        return (
            <StatisticCategoryWrapper difficulty = {item}
                scoresArray = {statistic[item]}
                theme = {props.theme}
            />
        );
    });
    return (
        <div className = "statistic-wrapper">
            {categories}
        </div>
    );
}
