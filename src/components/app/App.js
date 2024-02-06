import './App.css';

import Nav from '../nav/Nav';
import Promo from '../promo/promo';

function App() {
  return (
    <div className="app">
      <div className="burger">open</div>
      <div className="app__wrapper">
        <Nav />

        <div className="app__desc">
          <Promo />
        </div>
      </div>
    </div>
  );
}

export default App;
