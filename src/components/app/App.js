import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from '../nav/Nav';
import Promo from '../promo/Promo';
import About from '../about/About';
import Skills from '../skills/Skills';
import Lending from '../portfolio/lending/Lending';
import Multipage from '../portfolio/multipage/Multipage';
import Eshop from '../portfolio/eshop/Eshop';
import ReactPage from '../portfolio/reactPage/ReactPage';


function App() {

  const [showBurger, setShowBurger] = useState(false);
  const [blurBg, setBlurBg] = useState(true);
  const [stepImg, setStepImg] = useState(0);
  const [neon, setNeon] = useState(true);
  const [widthBrouser, setWidthBrouser] = useState(document.documentElement.clientWidth);
  const [heigthBrouser, setHeigthBrouser] = useState(document.documentElement.clientHeight);

  function burger() {
    const navMenu = document.querySelector('.nav');

    if (showBurger) {
      setShowBurger(!showBurger);
      navMenu.style.left = '-100%';
    } else if (!showBurger) {
      setShowBurger(!showBurger);
      navMenu.style.left = '0px';
    }

  }

  // Изменения количества картинок работ от расширения экрана
  useEffect(() => { stepImgOnWidth() }, [widthBrouser, heigthBrouser]);

  function stepImgOnWidth() {

    setWidthBrouser(document.documentElement.clientWidth);
    setHeigthBrouser(document.documentElement.clientHeight);

    if (widthBrouser < 1240 && heigthBrouser < 850) {
      setStepImg(4);
    } else if (widthBrouser < 1000 && heigthBrouser < 1025) {
      setStepImg(5);
    }
    else {
      setStepImg(6);
    }

    window.addEventListener('resize', stepImgOnWidth);

    return () => { window.removeEventListener('resize', stepImgOnWidth); }
  }








  return (
    <div className="app">
      <div className={'burger ' + (showBurger ? 'burger__close' : 'burger__open')} onClick={() => { burger(); setNeon(!neon) }}>{showBurger ? 'close' : 'open'}</div>
      <div className="app__wrapper">

        <Nav burger={burger} widthBrouser={widthBrouser} setNeon={setNeon} />

        <div className={'app__desc ' + (blurBg ? 'blur' : null)}>

          <Routes>
            <Route path='/' element={<Promo showBurger={showBurger} setBlurBg={setBlurBg} burger={burger} neon={neon} setNeon={setNeon} />} />
            <Route path='/About' element={<About setBlurBg={setBlurBg} />} />
            <Route path='/Skills' element={<Skills setBlurBg={setBlurBg} />} />
            <Route path='/Lending' element={<Lending setBlurBg={setBlurBg} stepImg={stepImg} />} />
            <Route path='/Multipage' element={<Multipage setBlurBg={setBlurBg} stepImg={stepImg} />} />
            <Route path='/Eshop' element={<Eshop setBlurBg={setBlurBg} stepImg={stepImg} />} />
            <Route path='/ReactPage' element={<ReactPage setBlurBg={setBlurBg} stepImg={stepImg} />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
