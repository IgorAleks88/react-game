import React from 'react';
import PropTypes from 'prop-types';
import './statistic-header.scss';

export default function StatisticHeder (props) {
    return (
        <div className = {`statistic-header statistic-header__${props.theme}`}>
            {`This is statistic for ${props.difficulty} pairs of cards`}
        </div>
    );
}

StatisticHeder.propTypes = {
    theme: PropTypes.string,
    difficulty: PropTypes.number
};
