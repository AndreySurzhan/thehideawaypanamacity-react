import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { MyCalendar } from '../../components/MyCalendar/MyCalendar';
import Section from '../../components/Section/Section'
import listingsData from '../../assets/json/listings.json'
import { getCalendarEventsFromUrl } from '../../utils/calendarData';
import './HomePage.css';

export default class HomePage extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            listingsData: listingsData
        };
    };

    async componentDidMount() {
        // request to get calendar data from airBnb etc. should be done through proxy server as drirect request failes with CORS
        const baseCorsAnyWhereUrl = 'https://thehideawaypanamacity.herokuapp.com/';
        const promises = this.state
            .listingsData
            .map(await this.setListingsCalendarRange(baseCorsAnyWhereUrl));

        this.setState({
            listingsData: await Promise.all(promises)
        })
    }

    setListingsCalendarRange = async (baseCorseAnyWereUrl) => async listing => {
        const airBnbCalendarRanges = await getCalendarEventsFromUrl(`${baseCorseAnyWereUrl}${listing.airBnbCalendarLink}`, null, {
            color: '#FF5722'
        });
        const vrboCalendarRanges = await getCalendarEventsFromUrl(`${baseCorseAnyWereUrl}${listing.vrboCalendarLink}`, null, {
            color: '#02537e'
        });

        listing.calendarRanges = airBnbCalendarRanges.concat(vrboCalendarRanges);

        return listing;
    }

    setAdditionalImageProps = listing => image => (
        {
            ...image,
            src: require(`../../assets/images/${listing.imageBaseUrl || ""}${image.src}`),
            alt: listing.title
        }
    );

    setAdditionalListingProps = listing => (
        {
            ...listing,
            images: listing.images.map(this.setAdditionalImageProps(listing))
        }
    );

    render() {
        // eslint-disable-next-line no-unused-expressions
        return (
            <div>
                <Section title="Our Listings">
                    {
                        this.state.listingsData
                            .map(this.setAdditionalListingProps)
                            .map((card, i) => (
                                <Card
                                    key={i}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    carousel={true}
                                    images={card.images}
                                    text={card.text}
                                    style={card.style}>
                                    <MyCalendar ranges={card.calendarRanges}></MyCalendar>
                                    <div className="book-button-group">
                                        {card.airBnbLink ? 
                                            <Button url={card.airBnbLink}>
                                                <img alt="airbnb book button icon" src={require("../../assets/icons/airbnb_w.svg")}></img>
                                                Book On AirBnb
                                            </Button> : null}
                                        {card.vrboLink ? 
                                            <Button className="vrbo" url={card.vrboLink}>
                                                <img alt="vrbo book button icon" src={require("../../assets/icons/vrbo_w.svg")}></img>
                                                Book On VRBO
                                            </Button> : null}
                                    </div>
                                </Card>)
                            )
                    }
                </Section>
            </div>
        )
    }
}