import './About.css';

import imgFoto from './img/foto.png';
function About() {
    return (
        <div className="about">
            <h2 className="about__title">МАРАТ МАМИН</h2>
            <h3 className="about__subtitle">Я веб разарботчик</h3>

            <div className="about__desc">
                <p>В своей работе я использую такие технологий, как: HTML, Flex верстка, CSS, SCSS, React, React Hooks, JavaScript, Git, Gulp, Webpack, npm, БЭМ, Figma, CorelDRAW. Более подробно с проектами можно ознакомиться в моем репозитории на ГитХабе.
                    В работе стремлюсь узнавать и внедрять новые технологии и методы. Постоянно обучаюсь новому. Тренирую и развиваю имеющиеся навыки. Не боюсь браться за сложные проекты.
                </p>
            </div>

            <img src={imgFoto} alt="foto" className="about__foto" />
        </div>
    )
}

export default About;