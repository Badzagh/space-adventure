import './OffersSection.scss';

function OffersSection() {
    return (
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
    );
}

export default OffersSection;
