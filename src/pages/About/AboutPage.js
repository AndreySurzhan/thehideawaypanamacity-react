import React from 'react';
import Card from '../../components/Card/Card';
import Section from '../../components/Section/Section';

const card =
{
    image: {
        alt: "some test",
        src: require("../../assets/images/1.jpg"),
        style: {
            borderRadius: '50%',
            width: '20%'
        }
    },
    title: "Title 1",
    subtitle: "Subtitle 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

export default class AboutPage extends React.Component {
    constructor(props, context) {
        super(props);

    }

    render() {
        // eslint-disable-next-line no-unused-expressions
        return (
            <div>
                <Section title="About Me">
                    <Card
                        title={card.title}
                        subtitle={card.subtitle}
                        image={card.image}
                        text={card.text}>
                    </Card>
                </Section>
            </div>
        )
    }
}