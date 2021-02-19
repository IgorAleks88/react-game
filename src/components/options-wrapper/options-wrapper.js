import React from 'react';
import './options-wrapper.scss';
import Button from '../button/button';

export default function OptionsWrapper () {
    return (
        <div className = "options-wrapper">
            <span>This is options wrapper</span>
            <Button name = "Start" />
        </div>
    );
}
