import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import MyCarousel from '../../components/Carousel/MyCarousel';
import Gallery from '../../components/Gallery/Gallery';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import { MyCalendar } from '../../components/MyCalendar/MyCalendar';
import Section from '../../components/Section/Section'

const cards =
{
    image: {
        alt: "some test",
        src: require("../../assets/images/1.jpg"),
        style: {width: "30%"}
    },
    title: "Title 1",
    subtitle: "Subtitle 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

const galleryCards =
{
    style: {
        width: '200px'
    },
    image: {
        alt: "some test",
        src: require("../../assets/images/1.jpg")
    },
    title: "Gallery Card 1",
    subtitle: "Subtitle 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
};

export default class HomePage extends React.Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        // eslint-disable-next-line no-unused-expressions
        return (
            <div>
                <Section title="Calendar">
                    <MyCalendar></MyCalendar>
                </Section>
                <Section title="Carousel">
                    <MyCarousel>
                        {Array.from(Array(4).keys()).map((x, i) => (<img key={i} width="300" alt={"test"} src={require('../../assets/images/1.jpg')}></img>))}
                    </MyCarousel>
                </Section>
                <Section title="Cards List">
                    {Array.from(Array(5).keys()).map(x => cards).map((card, key) => (
                        <Card
                            key={key}
                            title={card.title}
                            subtitle={card.subtitle}
                            image={card.image}
                            text={card.text}>
                                <Button>Click me</Button>
                        </Card>))}
                </Section>
                <Section title="Cards Gallery">
                    <Gallery>
                        {Array.from(Array(4).keys()).map(x => galleryCards).map((card, key) => (
                            <Card
                                key={key}
                                title={card.title}
                                subtitle={card.subtitle}
                                image={card.image}
                                text={card.text}
                                style={card.style}>
                            </Card>))}
                    </Gallery>
                </Section>
                <Section title="Image Gallery">
                    <Gallery isFlexGrow={true}>
                        {Array.from(Array(4).keys()).map((x, i) => (
                        <GalleryItem style={{width: "30%"}} key={i}>
                            <img alt={"test"} width="100%" src={require('../../assets/images/1.jpg')}></img>
                        </GalleryItem>
                        ))}
                    </Gallery>
                </Section>
            </div>
        )
    }
}