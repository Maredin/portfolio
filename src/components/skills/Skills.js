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
        title: 'HTML5',
        imgUrl: htmlImg,
        desc: 'Язык разметки, создает каркас вашего  сайта или приложения.'
    },
    {
        title: 'CSS3',
        imgUrl: cssImg,
        desc: 'Язык стилей позволяет  создавать абсолютно любой внешний вид  сайта или приложения.'
    },
    {
        title: 'Sass / SCSS',
        imgUrl: sassImg,
        desc: 'Препроцессор, который служит для быстрого написания CSS стилей.'
    },
    {
        title: 'БЭМ',
        imgUrl: bemImg,
        desc: 'БЭМ — методология, набор правил и рекомендаций по организации работы над проектом.'
    },
    {
        title: 'Java Script',
        imgUrl: jsImg,
        desc: 'Язык программирования позволяет оживить web-сраницу.'
    },
    {
        title: 'React',
        imgUrl: reactImg,
        desc: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.'
    },
    {
        title: 'MobX',
        imgUrl: mobxImg,
        desc: 'Библиотека, делающая управление состоянием приложения простым и масштабируемым.'
    },
    {
        title: 'Bootstrap',
        imgUrl: bootstrapImg,
        desc: 'Набор инструментов для создания  веб-приложений и сайтов.'
    },
    {
        title: 'webpack',
        imgUrl: webpackImg,
        desc: 'Сборщик модулей для JavaScript-приложений'
    },
    {
        title: 'Gulp',
        imgUrl: gulp,
        desc: 'Таск-менеджер для автоматического выполнения часто используемых задач.'
    },
    {
        title: 'Git',
        imgUrl: gitImg,
        desc: 'Распределённая система управления версиями.'
    },
    {
        title: 'Wordpress',
        imgUrl: wpImg,
        desc: 'Самая популярная система управления контентом для веб-сайтов.'
    },
]

function Skills({ setBlurBg }) {
    setBlurBg(false);

    return (
        <div className="skills">

            {skilsItem.map((item) => {
                return (
                    <div className="skills__cart">
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