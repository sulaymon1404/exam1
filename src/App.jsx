import pic1 from './assets/Finish line-cuate (2) 1.png'
import cardPic from './assets/Frame 131.png'
import pic2 from './assets/Group 481718.png'
import book from './assets/Group 481699.png'
import itemDot from './assets/Ellipse 298.png'
import pic3 from './assets/Frame 117.png'
import chemPic from './assets/Frame 130.png'
import y from './assets/Vector 7.png'
import x from './assets/Group 481707.png'
import pic4 from './assets/Healthy lifestyle-cuate 1.png'
import pic5 from './assets/Frame 132.png'
import pic6 from './assets/Group 481662.png'
import './App.css';

import Cards from './components/Cards';
import Items from './components/Items'
import Chem from './components/Chem'

function App() {
  return (
 <div>
  <div className="section1">
    <div className="navbar">
      <div className="nav-left">
      <h1>DIETOLOGONLINE</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li>Чому ми</li>          
          <li>Як це працює</li>          
          <li>Переваги</li>          
          <li>Вартість</li>          
          <li>Запитайте нас</li>          
          <li><button>Обрати дієтолога</button></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="section2">
    <div className="container">
      <div className="sec2-main">
      <div className="sec2-left">
        <h1>Дієта для бігу</h1>
        <p>Отримайте легкість і свободу, станьте першим разом із персональним дієтологом</p>
        <button>Обрати дієтолога</button>
      </div>
      <div className="sec2-left">
        <img src={pic1} alt="" />
      </div>
      </div>
    </div>
  </div>
  <div className="section3">
    <div className="container">
      <div className="sec3-main">
        <h1>Проблеми бігу без дієти</h1>
        <div className="sec3-cards">
          <Cards
          img={cardPic}
          h3='Нестача енергії'
          p='Неправильний раціон – нестача енергії/надмірне навантаження на організм'
          />
                    <Cards
          img={cardPic}
          h3='Нестача енергії'
          p='Неправильний раціон – нестача енергії/надмірне навантаження на організм'
          />
                    <Cards
          img={cardPic}
          h3='Нестача енергії'
          p='Неправильний раціон – нестача енергії/надмірне навантаження на організм'
          />
                    <Cards
          img={cardPic}
          h3='Нестача енергії'
          p='Неправильний раціон – нестача енергії/надмірне навантаження на організм'
          />
                    <Cards
          img={cardPic}
          h3='Нестача енергії'
          p='Неправильний раціон – нестача енергії/надмірне навантаження на організм'
          />
                    <Cards
          img={cardPic}
          h3='Нестача енергії'
          p='Неправильний раціон – нестача енергії/надмірне навантаження на організм'
          />
        </div>
      </div>
    </div>
  </div>
  <div className="section4">
    <div className="container">
      <div className="sec4-main">
        <div className="sec4-left">
          <img src={pic2} alt="" />
        </div>
        <div className="sec4-right">
          <h1>Кращий результат</h1>
          <h3>Правильне харчування дійсно працює</h3>
          <p>При неправильному харчуванні спорт може бути шкідливим для здоров’я. І навпаки – збалансований раціон, розроблений з урахування індивідуальних особливостей людини, допомагає не лише схуднути і отримати чудове тіло, а й досягти неймовірних результатів у спорті</p>
          <button>Обрати дієтолога`</button>
        </div>
      </div>
    </div>
  </div>
  <div className="section5">
    <div className="container">
      <div className="sec5-main">
        <h1>Як це працює ?</h1>
        <div className="items">
          <Items
          book={book}
          h3="Огляд вашої ситуації та цілей"
          dot={itemDot}
          p="Ми уважно вивчимо Вашу харчову поведінку, спосіб життя, проблеми зі здоров'ям та цілі"
          p2="Ми приділяємо увагу всім факторам здоров'я, включаючи можливий гормональний дисбаланс та індивідуальну непереносимість продуктів харчування"
          />
                    <Items
          book={book}
          h3="Огляд вашої ситуації та цілей"
          dot={itemDot}
          p="Ми уважно вивчимо Вашу харчову поведінку, спосіб життя, проблеми зі здоров'ям та цілі"
          p2="Ми приділяємо увагу всім факторам здоров'я, включаючи можливий гормональний дисбаланс та індивідуальну непереносимість продуктів харчування"
          />
                    <Items
          book={book}
          h3="Огляд вашої ситуації та цілей"
          dot={itemDot}
          p="Ми уважно вивчимо Вашу харчову поведінку, спосіб життя, проблеми зі здоров'ям та цілі"
          p2="Ми приділяємо увагу всім факторам здоров'я, включаючи можливий гормональний дисбаланс та індивідуальну непереносимість продуктів харчування"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="section6">
    <div className="container">
      <div className="sec6-main">
        <h1>Залежність харчування і спорту</h1>
        <div className="sec6-m">
          <div className="nav-left">
            <img src={pic3} alt="" />
          </div>
          <div className="nav-right">
            <Chem
            img={chemPic}
            h3="Залізо"
            p="Обумовлює витривалість і працездатність. Нестача заліза – найпоширеніша проблема серед атлетів"
            />
                        <Chem
            img={chemPic}
            h3="Залізо"
            p="Обумовлює витривалість і працездатність. Нестача заліза – найпоширеніша проблема серед атлетів"
            />
                        <Chem
            img={chemPic}
            h3="Залізо"
            p="Дефіцит викликає порушення кальцій-фосфорного обміну, звідси – травми і переломи"
            />
                        <Chem
            img={chemPic}
            h3="Залізо"
            p="Забезпечує правильну роботу м’язів і поглинання кисню  "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section7">
    <div className="container">
      <div className="sec7-main">
        <h1>Обрати персонального онлайн фахівця</h1>
        <div className="sec7-m">
          <div className="table">
            <div className="top">
              <div className="center">
              <p>Пробний тиждень</p>
              <h1>299 грн</h1>
              <h3>389 грн</h3>
              </div>
            </div>
            <div className="bottom">
              <div className="center">
                <ul>
                  <li><img src={y} alt="" /> Безкоштовні консультації</li>
                  <li><img src={y} alt="" />План харчування ґрунтується на ваших уподобаннях та потребах здоров'я</li>
                  <li><img src={y} alt="" />Гарантія повернення грошей протягом першого тижня</li>
                  <li><img src={y} alt="" />Коучинг : спеціаліст з харчування слідкуватиме за Вашими результатами</li>
                  <li><img src={x} alt="" />Консультації зі спортивного харчування</li>
                  <li><img src={x} alt="" />Безкоштовний тиждень для Вашого друга чи члена сім’ї</li>
                  <li><button> Обрати</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="top">
              <div className="center">
              <p>Пробний тиждень</p>
              <h1>299 грн</h1>
              <h3>389 грн</h3>
              </div>
            </div>
            <div className="bottom">
              <div className="center">
                <ul>
                  <li><img src={y} alt="" /> Безкоштовні консультації</li>
                  <li><img src={y} alt="" />План харчування ґрунтується на ваших уподобаннях та потребах здоров'я</li>
                  <li><img src={y} alt="" />Гарантія повернення грошей протягом першого тижня</li>
                  <li><img src={y} alt="" />Коучинг : спеціаліст з харчування слідкуватиме за Вашими результатами</li>
                  <li><img src={x} alt="" />Консультації зі спортивного харчування</li>
                  <li><img src={x} alt="" />Безкоштовний тиждень для Вашого друга чи члена сім’ї</li>
                  <li><button> Обрати</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="top">
              <div className="center">
              <p>Пробний тиждень</p>
              <h1>299 грн</h1>
              <h3>389 грн</h3>
              </div>
            </div>
            <div className="bottom">
              <div className="center">
                <ul>
                  <li><img src={y} alt="" /> Безкоштовні консультації</li>
                  <li><img src={y} alt="" />План харчування ґрунтується на ваших уподобаннях та потребах здоров'я</li>
                  <li><img src={y} alt="" />Гарантія повернення грошей протягом першого тижня</li>
                  <li><img src={y} alt="" />Коучинг : спеціаліст з харчування слідкуватиме за Вашими результатами</li>
                  <li><img src={x} alt="" />Консультації зі спортивного харчування</li>
                  <li><img src={x} alt="" />Безкоштовний тиждень для Вашого друга чи члена сім’ї</li>
                  <li><button> Обрати</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div> 
    <div className="section8">
      <div className="container">
        <div className="sec8-main">
          <div className="s8m-1">
            <img src={pic4} alt="" />
          </div>
          <div className="s8m-2">
            <h1>Загальної дієти не існує</h1>
            <p>При заняттях бігом дуже важливо що, скільки і коли ви їсте. Загальної дієти не існує – раціон має враховувати індивідуальні особливості організму, швидкість метаболізму, програму тренувань. Дуже важлива фахова допомога дієтолога, який розробить для вас спеціальну дієту для тренувань</p>
            <h3>Обрати дієтолога > </h3>
          </div>
          <div className="s8m-3">
            <div className="s8m-3center">
            <img src={pic5} alt="" />
            <h1>Енергія для огранізму</h1>
            <p>Вжливо наситити організм перед початком тренування, оптимально – складними вуглеводами, які дають енергію тривалий час. Інакше ви можете втратити свідомість, травмуватись чи навіть впасти у глікогікемічну кому</p>
            </div>
          </div>
          <div className="s8m-3">
            <div className="s8m-3center">
            <img src={pic5} alt="" />
            <h1>Енергія для огранізму</h1>
            <p>Вжливо наситити організм перед початком тренування, оптимально – складними вуглеводами, які дають енергію тривалий час. Інакше ви можете втратити свідомість, травмуватись чи навіть впасти у глікогікемічну кому</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="section9">
      <div className="container">
        <div className="sec9-main">
          <div className="sec9-left">
            <h1>Дізнайтесь більше</h1>
            <p>Все ще є запитання? Ми будемо раді відповісти на них у будь-який зручний для Вас час</p>
            <button>Запитайте нас</button>
          </div>
          <div className="sec9-right">
            <img src={pic6} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <h1>DIETOLOGONLINE</h1>
      <ul>
        <li>Чому ми</li>
        <li>Як це працює</li>
        <li>Переваги</li>
        <li>Вартість</li>
        <li>Запитайте нас</li>
      </ul>
    </div>
 </div>
  );
}

export default App;
