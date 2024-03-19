import React, { useEffect } from 'react';

import './Skills.css';

import htmlImg from './img/html.png';
import mobxImg from './img/mobx.png';
import cssImg from './img/css.png';
import sassImg from './img/sass.png';
import bemImg from './img/bem.png';
import jsImg from './img/js.png';
import reactImg from './img/react.png';
import bootstrapImg from './img/bootstrap.png';
import webpackImg from './img/webpack.png';
import gulp from './img/gulp.png';
import gitImg from './img/git.png';
import wpImg from './img/wp.png';




const skilsItem = [
    {
        id: Math.random(),
        title: 'HTML5',
        imgUrl: htmlImg,
        desc: 'Язык разметки, создает каркас вашего  сайта или приложения.'
    },
    {
        id: Math.random(),
        title: 'CSS3',
        imgUrl: cssImg,
        desc: 'Язык стилей позволяет  создавать абсолютно любой внешний вид  сайта или приложения.'
    },
    {
        id: Math.random(),
        title: 'Sass / SCSS',
        imgUrl: sassImg,
        desc: 'Препроцессор, который служит для быстрого написания CSS стилей.'
    },
    {
        id: Math.random(),
        title: 'БЭМ',
        imgUrl: bemImg,
        desc: 'БЭМ — методология, набор правил и рекомендаций по организации работы над проектом.'
    },
    {
        id: Math.random(),
        title: 'Java Script',
        imgUrl: jsImg,
        desc: 'Язык программирования позволяет оживить web-сраницу.'
    },
    {
        id: Math.random(),
        title: 'React',
        imgUrl: reactImg,
        desc: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.'
    },
    {
        id: Math.random(),
        title: 'MobX',
        imgUrl: mobxImg,
        desc: 'Библиотека, делающая управление состоянием приложения простым и масштабируемым.'
    },
    {
        id: Math.random(),
        title: 'Bootstrap',
        imgUrl: bootstrapImg,
        desc: 'Набор инструментов для создания  веб-приложений и сайтов.'
    },
    {
        id: Math.random(),
        title: 'webpack',
        imgUrl: webpackImg,
        desc: 'Сборщик модулей для JavaScript-приложений'
    },
    {
        id: Math.random(),
        title: 'Gulp',
        imgUrl: gulp,
        desc: 'Таск-менеджер для автоматического выполнения часто используемых задач.'
    },
    {
        id: Math.random(),
        title: 'Git',
        imgUrl: gitImg,
        desc: 'Распределённая система управления версиями.'
    },
    {
        id: Math.random(),
        title: 'Wordpress',
        imgUrl: wpImg,
        desc: 'Самая популярная система управления контентом для веб-сайтов.'
    },
]

function Skills({ setBlurBg }) {
    useEffect(() => { setBlurBg(false) }, [setBlurBg])

    return (
        <div className="skills">

            {skilsItem.map((item) => {
                return (
                    <div className="skills__cart" key={item.id}>
                        <img className="skills__cart-img" src={item.imgUrl} alt="html" />
                        <h3 className="skills__cart-title">{item.title}</h3>
                        <p className="skills__cart-desc">{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills;