import './lending.css';

import imgLending1 from './img/coffee.png'
import imgLending2 from './img/disign.png'
import imgLending3 from './img/forest.png'
import imgLending4 from './img/furniture.png'
import imgLending5 from './img/vtop.png'
import imgLending6 from './img/space.png'


function Lending({ setBlurBg }) {
    setBlurBg(true);
    return (
        <div className="lending">
            <h2 className='lending__title'>Лендинг</h2>
            <div className="lending__wrapper">
                <div className="lending__cart">
                    <a href="https://maredin.github.io/coffee/" target='blank'>
                        <img src={imgLending1} alt="img coffee" className="lending__cart-img" />
                    </a>
                </div>

                <div className="lending__cart">
                    <a href="https://maredin.github.io/im-abby/" target='blank'>
                        <img src={imgLending2} alt="img disign" className="lending__cart-img" />
                    </a>
                </div>

                <div className="lending__cart">
                    <a href="https://maredin.github.io/parallax3D/" target='blank'>
                        <img src={imgLending3} alt="img forest" className="lending__cart-img" />
                    </a>
                </div>

                <div className="lending__cart">
                    <a href="https://maredin.github.io/rossexpress/" target='blank'>
                        <img src={imgLending4} alt="img furniture" className="lending__cart-img" />
                    </a>
                </div>

                <div className="lending__cart">
                    <a href="https://maredin.github.io/vtop3/" target='blank'>
                        <img src={imgLending5} alt="img vtop" className="lending__cart-img" />
                    </a>
                </div>

                <div className="lending__cart">
                    <a href="https://maredin.github.io/developer/" target='blank'>
                        <img src={imgLending6} alt="img space" className="lending__cart-img" />
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Lending;