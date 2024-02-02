import './App.css';

import Nav from '../nav/Nav';
import Promo from '../promo/promo';

function App() {
  return (
    <div className="main">
      <div className="main__wrapper">
        <Nav />

        <div className="main__desc">
          <Promo />
        </div>
      </div>
    </div>
  );
}

export default App;
