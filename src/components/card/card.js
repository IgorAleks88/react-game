import React from 'react';
import './card.scss';

export default function Card (props) {
    return (
        <div className = "card-container" >
            <div className = "card-front"
                style = {{ backgroundColor: props.color }}
                onClick = {(e) => e.target.closest('.card-container').classList.remove('card-container__rotate')}/>
            <div className = "card-back"
                onClick = {(e) => e.target.closest('.card-container').classList.add('card-container__rotate')} />
        </div>
    );
}
