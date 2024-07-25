import './Header.scss';

function Header() {
    return (
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
    );
}

export default Header;
