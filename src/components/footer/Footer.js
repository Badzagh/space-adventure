import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container" >
                <img className="container footer__img" src={'/icons/rocket.svg'} alt="logo" />
                <p className="container footer__title lato-extra-bold">Exciting space adventure!</p>
            </div>
        </footer>
    );
}

export default Footer;
