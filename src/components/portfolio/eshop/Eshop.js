import React, { useEffect } from 'react';

import './eshop.css';

import imgLending1 from './img/electroshop.png'


const cartImgArr = [
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/batman/",
        imgSrc: imgLending1,
        imgAlt: "img electro"
    },

]


function Eshop({ setBlurBg, stepImg }) {
    useEffect(() => { setBlurBg(true) }, [setBlurBg])

    function AddCart({ stepImg }) {
        return (
            cartImgArr.map((item, i) => {
                if (i < stepImg) {
                    return (
                        <div className="eshop__cart" key={item.id}>
                            <a href={item.imgLink} target='blank'>
                                <img src={item.imgSrc} alt={item.imgAlt} className="eshop__cart-img" />
                            </a>
                        </div>)
                }
            })
        )
    }


    return (
        <div className="eshop">
            <h2 className='eshop__title'>Интернет магазин</h2>
            <div className="eshop__wrapper">
                <AddCart stepImg={stepImg} />

            </div>
        </div>
    )

}

export default Eshop;