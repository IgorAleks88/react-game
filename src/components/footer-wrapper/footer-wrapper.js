import React from 'react';
// import PropTypes from 'prop-types';
import './footer-wrapper.scss';

export default function FooterWrapper (props) {
    return (
        <div className = {props.footerWrapperClass}>
            <img className = "footer-wrapper__logo" src = "./assets/img/logo.svg"/>
            <a className = "footer-wrapper__link" href="https://github.com/IgorAleks88">IgorAleks88</a>
            <a className = "footer-wrapper__link" href="https://rs.school/react/">React2021Q1</a>
        </div>
    );
}
