import React from 'react';
import PropTypes from 'prop-types';
import './options-category-wrapper.scss';
import Button from '../button/button';

export default function OptionsCategoryWrapper (props) {
    const buttons = props.buttons.map((item) => {
        return (
            <Button name = {item.name}
                onClick = {() => {item.onClick(item.name); props.setShouldStart(true);}}/>
        );
    });
    return (
        <div className = "options-category-wrapper">
            <span className = "options-category-wrapper__header">{props.categoryName}</span>
            {buttons}
        </div>
    );
}

OptionsCategoryWrapper.propTypes = {
    buttons: PropTypes.array,
    categoryName: PropTypes.string
};
