import React, { useEffect } from 'react';
import './promo.css';

function Promo({ showBurger }) {

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
                <button className="promo__btns-contact">связаться</button>
                <button className="promo__btns-work">Работы</button>
            </div>
        </div>
    )
}

export default Promo;