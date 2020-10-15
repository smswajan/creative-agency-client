import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import SectionSpinner from '../../SectionSpinner/SectionSpinner';
import TestimonialCard from './TestimonialCard';
import "./Testimonials.scss"

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/reviews', {
            method: 'GET',
        }).then(response => response.json())
            .then(result => {
                setReviews(result);
                setLoading(false)
            })
    }, [])

    return (
        <section className="py-5 container">
            <h2 className="text-primary text-center mt-3 mb-5">Clients <span className="text-success">Feedback</span> </h2>
            <Row className="d-flex align-items-stretch">
                {loading && <SectionSpinner />}
                {reviews && reviews.map(item => <TestimonialCard info={item} key={item.id} />)}
            </Row>
        </section>
    );
};

export default Testimonials;