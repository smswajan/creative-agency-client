import React from 'react';
import { Row } from 'react-bootstrap';
import { CustomerOne, CustomerThree, CustomerTwo } from '../../images';
import TestimonialCard from './TestimonialCard';
import "./Testimonials.scss"

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Nash Patrik",
            title: "CEO, Manpol",
            image: CustomerOne,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor dolores harum aliquam provident hic!"
        },
        {
            id: 2,
            name: "Miriam Barron",
            title: "CEO, Manpol",
            image: CustomerTwo,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor dolores harum aliquam provident hic!"
        },
        {
            id: 3,
            name: "Nash Patrik",
            title: "CEO, Manpol",
            image: CustomerThree,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor dolores harum aliquam provident hic!"
        },
    ]
    return (
        <section className="py-5 container">
            <h2 className="text-primary text-center mt-3 mb-5">Clients <span className="text-success">Feedback</span> </h2>
            <Row>
                {testimonialData.map(item => <TestimonialCard info={item} key={item.id} />)}
            </Row>
        </section>
    );
};

export default Testimonials;