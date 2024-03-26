import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './promo.css';


function Promo({ showBurger, setBlurBg }) {
    useEffect(() => { setBlurBg(true) }, [setBlurBg])


    function hideAnimations() {
        const title = document.querySelector('.promo__title');
        if (showBurger) {
            title.style.animation = 'none';
        } else {
            setTimeout(() => {
                title.style.animation = 'flicker 1.5s infinite alternate';
            }, 800);
        }
    }
    useEffect(() => { hideAnimations() }, [showBurger])

    return (
        <div className="promo">
            <h1 className="promo__title">web <br /> developer</h1>
            <div className="promo__btns">
                <a href='https://ufa.hh.ru/resume/eac15ba5ff09946fc10039ed1f4434324e7669' className="promo__btns-contact" target='blank'>hh.ru</a>
                <Link to="/Lending" className="promo__btns-work">Работы</Link>

            </div>
        </div>
    )
}

export default Promo;