import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App lato-bold">
      <header className="header">
        <div className="container header__container" >
          <img className="header__company-logo" src={'/icons/company-logo.svg'} alt="logo" />
          <nav className="header__nav">
            <a
              className="link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a
              className="link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Products
            </a>
            <a
              className="link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="header__shop-icon-colored" src={'/icons/shop-icon-colored.svg'} alt="logo" />
              <img className="header__shop-icon" src={'/icons/shop-icon.svg'} alt="logo" />
            </a>
          </nav>

          <label className="header__open-menu-icon" for="menu-checkbox" tabindex="0"><img id="menu-icon" src={'/icons/menu.svg'} alt="logo" /></label>
          <input id="menu-checkbox" className="header__menu-checkbox" type="checkbox" />

          <ul className="header__menu">
            <label className="header__close-menu-icon" for="menu-checkbox" tabindex="0"><img id="menu-icon" src={'/icons/menu (1).svg'} alt="logo" /></label>
            <input id="menu-checkbox" className="header__menu-checkbox" type="checkbox" />
            <div>
              <li><a className="link" href="https://mastodon.social/@threkk">Home</a></li>
              <li><a className="link" href="https://twitter.com/threkk">Products</a></li>
              <li><a className="link" href="https://github.com/threkk">
                <img className="header__shop-icon-colored" src={'/icons/shop-icon-colored.svg'} alt="logo" />
                <img className="header__shop-icon" src={'/icons/shop-icon.svg'} alt="logo" />
              </a></li>
            </div>
          </ul>
        </div>
      </header>
      <main>
        <section className="banner-section">
          <div class="container banner-section__container" >
            <div className="banner-section__content">
              <h1 className="banner-section__title lato-extra-bold">
                Discover the vast<br /> expanses of <span>space</span>
              </h1>
              <h5 className="banner-section__sub-title lato-extra-bold">
                Where the possibilities are <span>endless!</span>
              </h5>
              <a
                className="link banner-section__link"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="banner-section__button">Learn more</button>
              </a>
            </div>
            <img className="banner-section__image" src={'/icons/earth-icon.svg'} alt="logo" />
          </div>
        </section>
        <section className="offers-section">
          <div className="container" >
            <h2 className="offers-section__title lato-extra-bold">
              Offers
            </h2>
            <div className="offers-section__offers-container" >
              <div className="offers-section__offer-container" id="first-offer-container">
                <div className="offers-section__first-offer" >
                  <h1 className='lato-extra-bold'>
                    Move the borders<br />
                    of reality!
                  </h1>
                  <h5 className='lato-extra-bold'>
                    Go on a space adventure - it's possible with us!
                  </h5>
                  <a
                    className="link"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='offers-section__button'>Learn more</button>
                  </a>
                </div>
              </div>
              <div className="offers-section__offer-container" id="second-offer-container">
                <div className="offers-section__second-offer" >
                  <h1 className='lato-extra-bold'>
                    Space is not<br />
                    just stars and<br />
                    planets
                  </h1>
                  <h5 className='lato-extra-bold'>
                    Go on a space adventure
                  </h5>
                  <a
                    className="link"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='offers-section__button'>Learn more</button>
                  </a>
                </div>
              </div>
              <div className="offers-section__offer-container" id="third-offer-container">
                <div className="offers-section__third-offer" >
                  <h1 className='lato-extra-bold'>
                    For those<br />
                    who dream<br />
                    of stars
                  </h1>
                  <h5 className='lato-extra-bold'>
                    Our offer: make your dream come true
                  </h5>
                  <a
                    className="link"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='offers-section__button'>Learn more</button>
                  </a>
                </div>
              </div>
              <div className="offers-section__offer-container" id="four-offer-container">
                <div className="offers-section__four-offer" >
                  <h1 className='lato-extra-bold'>
                    Fulfill your<br />
                    fantastic dreams
                  </h1>
                  <h5 className='lato-extra-bold'>
                    Space has never been so close
                  </h5>
                  <a
                    className="link"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='offers-section__button'>Learn more</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-journey-section">
          <div className="container space-journey-section__container" >
            <h2 className="space-journey-section__title lato-extra-bold">
              Embark on a space journey
            </h2>
            <p className="space-journey-section__description">
              Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
            </p>
            <a className='space-journey-section__link lato-extra-bold' href="">Read more</a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer__container" >
          <img className="container footer__img" src={'/icons/rocket.svg'} alt="logo" />
          <p className="container footer__title lato-extra-bold">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
