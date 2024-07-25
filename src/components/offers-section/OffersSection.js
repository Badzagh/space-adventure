import './OffersSection.scss';

function OffersSection() {

    const offers = [
        {
            id: "first",
            title: "Move the borders\nof reality!",
            subtitle: "Go on a space adventure - it's possible with us!"
        },
        {
            id: "second",
            title: "Space is not\njust stars and\nplanets",
            subtitle: "Go on a space adventure"
        },
        {
            id: "third",
            title: "For those\nwho dream\nof stars",
            subtitle: "Our offer: make your dream come true"
        },
        {
            id: "four",
            title: "Fulfill your\nfantastic dreams",
            subtitle: "Space has never been so close"
        }
    ];

    return (
        <section className="offers-section">
            <div className="container" >
                <h2 className="offers-section__title lato-extra-bold">
                    Offers
                </h2>
                <div className="offers-section__offers-container" >
                    {offers.map(({ id, title, subtitle}, index) => (
                        <div className="offers-section__offer-container" id={id + '-offer-container'} key={index}>
                            <div className={`offers-section__${id}-offer`}>
                                <h1 className='lato-extra-bold'>
                                    {title.split('\n').map((line, i) => (
                                        <span key={i}>{line}<br /></span>
                                    ))}
                                </h1>
                                <h5 className='lato-extra-bold'>
                                    {subtitle}
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OffersSection;
