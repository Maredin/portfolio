import React, { useEffect } from 'react';

import './About.css';

import imgFoto from './img/foto.png';

function About({ setBlurBg }) {
    useEffect(() => { setBlurBg(true) }, [setBlurBg])

    // Размер фотки на экране от разного расширения браузера
    useEffect(() => {
        const widthBrouser = document.documentElement.clientWidth;
        const heigthBrouser = document.documentElement.clientHeight;

        const sizeBrouser = widthBrouser / heigthBrouser;

        const fotoWidth = document.querySelector('.about__foto');
        if (sizeBrouser >= 1.6 && widthBrouser < 1440) {
            fotoWidth.style.height = '28%';
            fotoWidth.style.width = 'auto';
        }
        else if (sizeBrouser < 1 && widthBrouser > 700) {
            fotoWidth.style.height = 'auto';
            fotoWidth.style.width = 'auto';
        }
        else if (sizeBrouser < 0.465 && widthBrouser < 700) {
            fotoWidth.style.height = 'auto';
            fotoWidth.style.width = '70%';
        }
        else {
            fotoWidth.style.height = 'auto';
            fotoWidth.style.width = 'calc((100vw - 320px)/(1440 - 320) * (294 - 100) + 100px)';
        }
    }, [])


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