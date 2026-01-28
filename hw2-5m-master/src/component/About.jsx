import Filder from '../img/Folder.png';
import cart from '../img/cart.png';
import cart2 from '../img/cart2.png';
import cart3 from '../img/cart3.png';

export default function About() {
  return (
    <section className="about">

      <div className="about-line"></div>

      <div className="about-content">
        
        {/* Верхняя часть (V1, V2, V3) */}
        <div className="about-top">
          <div className="about-item">
            <img src={cart2} alt="item" />
            <h1>V.1</h1>
            <p>Результат вашего обучения</p>
          </div>

          <div className="about-item">
            <img src={cart} alt="item" />
            <h1>V.2</h1>
            <p>Результат вашего обучения</p>
          </div>

          <div className="about-item">
            <img src={cart3} alt="item" />
            <h1>V.3</h1>
            <p>Результат вашего обучения</p>
          </div>
        </div>

     
        <div className="about-bottom">
          <img src={Filder} alt="item" />

          <div className="about-text">
            <h1 className="about-h1">Максимальная белизна</h1>

            <p className="about-p1">
              Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.
            </p>

            <p className="about-p2">
              Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

