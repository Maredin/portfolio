import React, { useEffect } from 'react';

import './About.css';

import imgFoto from './img/foto.png';
function About({ setBlurBg }) {
    useEffect(() => { setBlurBg(true) }, [setBlurBg])
    return (
        <div className="about">
            <h2 className="about__title">МАРАТ МАМИН</h2>
            <h3 className="about__subtitle">Привет! Я - Frontend разработчик</h3>

            <div className="about__desc">
                <p>Мой подход к разработке основан на создании удобного и привлекательного пользовательского интерфейса, который будет отвечать потребностям пользователей и приносить им удовлетворение. Стремлюсь к достижению лучших практик разработки кода, включая чистоту, модульность и масштабируемость. Мне нравится делать вещи простыми и понятными, чтобы пользователи могли легко понять и взаимодействовать с интерфейсом.
                </p>
            </div>

            <img src={imgFoto} alt="foto" className="about__foto" />
        </div>
    )
}

export default About;