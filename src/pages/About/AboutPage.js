import React from 'react';
import Card from '../../components/Card/Card';
import Section from '../../components/Section/Section';
import './AboutPage.css'

const card = {
    image: {
        alt: "Chuck's About Me",
        src: require("../../assets/images/chuck_about.jpg")
    },
    title: "Hi I'm Chuck",
    text: `Hello, I am a property owner and long time builder. 
    I came to Florida several years ago on a major condo project and simply never left. 
    I enjoy the wildlife and nature this area has to offer; starting with the dolphins we often see daily from our homes. 
    We are lightly populated residential area with all the activities close at hand, including great restaurants, parks, sugar sand beaches, shopping and so much  more. 
    You'll enjoy being outdoors; paddle boarding & kayaks. I get a kick out of meeting the wonderful guests that come to experience "The Hideaway". 
    The private homes on the waterfront property keep you with plenty of options as well as other units off site. 
    Vacation and business traveler's from literally around the world find their peace here at "The Hideaway" Panama City, Florida.`
};

export default class AboutPage extends React.Component {
    constructor(props, context) {
        super(props);

    }

    render() {
        // eslint-disable-next-line no-unused-expressions
        return (
            <div id="about-me">
                <Section title="About Me">
                    <Card
                        title={card.title}
                        subtitle={card.subtitle}
                        image={card.image}
                        text={card.text}
                        style={card.style}>
                        <h4>For price and rent text 850-890-4808</h4>
                    </Card>
                </Section>
            </div>
        )
    }
}