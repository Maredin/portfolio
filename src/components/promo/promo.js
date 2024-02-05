import './promo.css';

function Promo() {
    return (
        <div className="promo">
            <h1 className="promo__title">web <br /> developer</h1>
            <div className="promo__btns">
                <button className="promo__btns-contact">связаться</button>
                <button className="promo__btns-work">Работы</button>
            </div>
        </div>
    )
}

export default Promo;