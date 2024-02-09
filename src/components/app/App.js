import React, { useState } from 'react';
import './App.css';

import Nav from '../nav/Nav';
import Promo from '../promo/promo';
import About from '../about/About';


function App() {

  const [showBurger, setShowBurger] = useState(false);

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

        <div className="app__desc">
          {/* <Promo showBurger={showBurger} /> */}
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
