import './BannerSection.scss';

function BannerSection() {
    return (
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
    );
}

export default BannerSection;
