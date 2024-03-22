import React, { useEffect } from 'react';

import './multipage.css';

import imgLending1 from './img/batman.png'


const cartImgArr = [
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/batman/",
        imgSrc: imgLending1,
        imgAlt: "img batman"
    },

]


function Multipage({ setBlurBg, stepImg }) {
    useEffect(() => { setBlurBg(true) }, [setBlurBg])

    function AddCart({ stepImg }) {
        return (
            cartImgArr.map((item, i) => {
                if (i < stepImg) {
                    return (
                        <div className="multipage__cart" key={item.id}>
                            <a href={item.imgLink} target='blank'>
                                <img src={item.imgSrc} alt={item.imgAlt} className="multipage__cart-img" />
                            </a>
                        </div>)
                }
            })
        )
    }


    return (
        <div className="multipage">
            <h2 className='multipage__title'>Многостраничник</h2>
            <div className="multipage__wrapper">
                <AddCart stepImg={stepImg} />

            </div>
        </div>
    )

}

export default Multipage;