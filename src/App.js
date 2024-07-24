import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container" >
          {/* <img src={'/icons/company-logo.svg'} className="App-logo" alt="logo" /> */}
          <img id="company-logo" src={'/icons/company-logo.svg'} alt="logo" />
          <nav>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Products
            </a>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={'/icons/shop-icon-colored.svg'} alt="logo" />
              <img id="shop-icon" src={'/icons/shop-icon.svg'} alt="logo" />
            </a>
          </nav>

          <label for="menu" tabindex="0"><img id="menu-icon" src={'/icons/menu.svg'} alt="logo" /></label>
          <input id="menu" type="checkbox" />

          <ul>
            <label for="menu" tabindex="0"><img id="menu-icon" src={'/icons/menu (1).svg'} alt="logo" /></label>
            <input id="menu" type="checkbox" />
            <div>
              <li><a className="App-link" href="https://mastodon.social/@threkk">Home</a></li>
              <li><a className="App-link" href="https://twitter.com/threkk">Products</a></li>
              <li><a className="App-link" href="https://github.com/threkk"><img id="shop-icon" src={'/icons/shop-icon.svg'} alt="logo" /></a></li>
            </div>

          </ul>
        </div>
      </header>
      <main>
        <section id="banner-section">
          <div class="container" >
            <div>
              <h1>
                Discover the vast<br /> expanses of <span>space</span>
              </h1>
              <h5>
                Where the possibilities are <span>endless!</span>
              </h5>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Learn more</button>
              </a>
            </div>
            <img src={'/icons/earth-icon.svg'} alt="logo" />
          </div>
        </section>
        <section id="offers-section">
          <div class="container" >
            <h2>
              Offers
            </h2>
            <div class="offers-container" >
              <div id="first-offer-container">
                <div class="first-offer" >
                  <h1>
                    Move the borders<br />
                    of reality!
                  </h1>
                  <h5>
                    Go on a space adventure - it's possible with us!
                  </h5>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Learn more</button>
                  </a>
                </div>
              </div>
              <div id="second-offer-container">
                <div class="second-offer" >
                  <h1>
                    Space is not<br />
                    just stars and<br />
                    planets
                  </h1>
                  <h5>
                    Go on a space adventure
                  </h5>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Learn more</button>
                  </a>
                </div>
              </div>
              <div id="third-offer-container">
                <div class="third-offer" >
                  <h1>
                    For those<br />
                    who dream<br />
                    of stars
                  </h1>
                  <h5>
                    Our offer: make your dream come true
                  </h5>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Learn more</button>
                  </a>
                </div>
              </div>
              <div id="four-offer-container">
                <div class="four-offer" >
                  <h1>
                    Fulfill your<br />
                    fantastic dreams
                  </h1>
                  <h5>
                    Space has never been so close
                  </h5>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Learn more</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="space-journey-section">
          <div class="container" >
            <h2>
              Embark on a space journey
            </h2>
            <p>
              Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
            </p>
            <a href="">Read more</a>
          </div>
        </section>
      </main>
      <footer>
        <div class="container" >
          {/* <img src={'/icons/company-logo.svg'} className="App-logo" alt="logo" /> */}
          <img src={'/icons/rocket.svg'} alt="logo" />
          <p>Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
