import React, { useEffect } from 'react';

import './reactPage.css';

import imgLending1 from './img/todo.png';
import imgLending2 from './img/water.png';
import imgLending3 from './img/user.png';
import imgLending4 from './img/oncoffee.png';


const cartImgArr = [
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/react.coffee/build/",
        imgSrc: imgLending4,
        imgAlt: "img oncoffee"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/react.first.app/build/",
        imgSrc: imgLending3,
        imgAlt: "img user"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/react.todo/build/",
        imgSrc: imgLending2,
        imgAlt: "img todo"
    },
    {
        id: Math.random(),
        imgLink: "https://maredin.github.io/react.weather/build/",
        imgSrc: imgLending1,
        imgAlt: "img water"
    },
]


function ReactPage({ setBlurBg, stepImg }) {
    useEffect(() => { setBlurBg(true) }, [setBlurBg])

    function AddCart({ stepImg }) {
        return (
            cartImgArr.map((item, i) => {
                if (i < stepImg) {
                    return (
                        <div className="reactPage__cart" key={item.id}>
                            <a href={item.imgLink} target='blank'>
                                <img src={item.imgSrc} alt={item.imgAlt} className="reactPage__cart-img" />
                            </a>
                        </div>)
                }
            })
        )
    }


    return (
        <div className="reactPage">
            <h2 className='reactPage__title'>React</h2>
            <div className="reactPage__wrapper">
                <AddCart stepImg={stepImg} />

            </div>
        </div>
    )

}

export default ReactPage;