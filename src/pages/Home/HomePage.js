import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { MyCalendar } from '../../components/MyCalendar/MyCalendar';
import Section from '../../components/Section/Section'
import galleryCards from '../../assets/json/listings.json'

export default class HomePage extends React.Component {
    constructor(props, context) {
        super(props);
    }

    setAdditionalImageProps = listing => image => (
        {
            ...image,
            src: require(`../../assets/images/${image.src}`),
            alt: listing.title,
            style: {
                height: "450px"
            }
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
                        galleryCards
                            .map(this.setAdditionalListingProps)
                            .map((card, key) => (
                                <Card
                                    key={key}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    carousel={true}
                                    images={card.images}
                                    text={card.text}
                                    style={card.style}>
                                    <MyCalendar></MyCalendar>
                                    <Button url={card.airBnbLink}>Book Here!</Button>
                                </Card>)
                            )
                    }
                </Section>
            </div>
        )
    }
}