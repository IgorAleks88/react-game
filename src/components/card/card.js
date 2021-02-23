import React from 'react';
import './card.scss';

export default function Card (props) {
    function frontClick (e) {
        const container = e.target.closest('.card-container');
        if (container.dataset.active === true) {
            container.classList.remove('card-container__rotate');
        }
    }

    function backClick (e) {
        const container = e.target.closest('.card-container');
        if (container.dataset.active) {
            container.classList.add('card-container__rotate');
            if (props.firstOpened) {
                if (container.dataset.item === props.firstOpened.dataset.item) {
                    container.dataset.active = false;
                    props.firstOpened.dataset.active = false;
                    props.changeFirstOpened(null);
                } else {
                    setTimeout(() => {
                        container.classList.remove('card-container__rotate');
                        props.firstOpened.classList.remove('card-container__rotate');
                        props.changeFirstOpened(null);
                    }, 1000);
                }
            } else {
                props.changeFirstOpened(container);
            }
        }
    }
    return (
        <div className = "card-container"
            data-active
            data-item = {props.item}>
            <div className = "card-front"
                style = {{ backgroundImage: `url(/assets/img/${props.category}/${props.item}.png)` }}
                onClick = {frontClick}/>
            <div className = "card-back"
                style = {{ backgroundImage: `url(/assets/img/${props.category}/background.png)` }}
                onClick = {backClick} />
        </div>
    );
}
