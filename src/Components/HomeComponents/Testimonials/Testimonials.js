import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { CustomerOne, CustomerThree, CustomerTwo } from '../../../images';
import TestimonialCard from './TestimonialCard';
import "./Testimonials.scss"

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/reviews', {
            method: 'GET',
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                setReviews(result)
            })
    }, [])
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
                {reviews.map(item => <TestimonialCard info={item} key={item.id} />)}
            </Row>
        </section>
    );
};

export default Testimonials;