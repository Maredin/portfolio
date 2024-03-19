import React, { useEffect } from 'react';

import './lending.css';

import imgLending1 from './img/coffee.png'
import imgLending2 from './img/disign.png'
import imgLending3 from './img/forest.png'
import imgLending4 from './img/furniture.png'
import imgLending5 from './img/vtop.png'
import imgLending6 from './img/space.png'

const cartImgArr = [
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/developer/",
        imgSrc: imgLending6,
        imgAlt: "img space"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/vtop3/",
        imgSrc: imgLending5,
        imgAlt: "img vtop"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/parallax3D/",
        imgSrc: imgLending3,
        imgAlt: "img forest"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/im-abby/",
        imgSrc: imgLending2,
        imgAlt: "img disign"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/coffee/",
        imgSrc: imgLending1,
        imgAlt: "img coffee"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/rossexpress/",
        imgSrc: imgLending4,
        imgAlt: "img furniture"
    },
]


function Lending({ setBlurBg, stepImg }) {
    useEffect(() => { setBlurBg(true) }, [setBlurBg])

    function AddCart({ stepImg }) {
        return (
            cartImgArr.map((item, i) => {
                if (i < stepImg) {
                    return (
                        <div className="lending__cart" key={item.id}>
                            <a href={item.imgLink} target='blank'>
                                <img src={item.imgSrc} alt={item.imgAlt} className="lending__cart-img" />
                            </a>
                        </div>)
                }
            })
        )
    }


    return (
        <div className="lending">
            <h2 className='lending__title'>Лендинг</h2>
            <div className="lending__wrapper">
                <AddCart stepImg={stepImg} />

            </div>
        </div>
    )

}

export default Lending;