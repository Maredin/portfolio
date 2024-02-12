import React, { useState } from 'react';
import './App.css';

import Nav from '../nav/Nav';
import Promo from '../promo/promo';
import About from '../about/About';
import Skills from '../skills/Skills';


function App() {

  const [showBurger, setShowBurger] = useState(false);
  const [blurBg, setBlurBg] = useState(true);

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

  return (
    <div className="app">
      <div className={'burger ' + (showBurger ? 'burger__close' : 'burger__open')} onClick={burger}>{showBurger ? 'close' : 'open'}</div>
      <div className="app__wrapper">

        <Nav />

        <div className={'app__desc ' + (blurBg ? 'blur' : null)}>
          {/* <Promo showBurger={showBurger} /> */}
          {/* <About /> */}
          <Skills setBlurBg={setBlurBg} />
        </div>
      </div>
    </div>
  );
}

export default App;
