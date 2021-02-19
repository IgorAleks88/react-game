import React from 'react';
import './card.scss';

export default function Card (props) {
    return (
        <div className = "card-container" >
            <div className = "card-front"
                style = {{ backgroundImage: `url(/assets/img/football/${props.item}.png)` }}
                onClick = {(e) => e.target.closest('.card-container').classList.remove('card-container__rotate')}/>
            <div className = "card-back"
                style = {{ backgroundImage: `url(/assets/img/football/background.png)` }}
                onClick = {(e) => e.target.closest('.card-container').classList.add('card-container__rotate')} />
        </div>
    );
}
