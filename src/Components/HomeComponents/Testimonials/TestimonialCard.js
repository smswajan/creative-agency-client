import React from 'react';
import { Card } from 'react-bootstrap';
import { CustomerOne, CustomerThree, CustomerTwo } from '../../../images';

const TestimonialCard = ({ info }) => {
    const { company, name, review, userImage } = info;

    return (
        <div className=" col-md-4 mb-4">
            <div className="card testimonial-card p-4">
                <div className="d-flex align-items-center mb-3">
                    <img src={userImage} alt={name} className="customer-avatar" />
                    <div className="pl-4">
                        <h6 className="mb-0">{name} </h6>
                        <p className="mb-0"><strong>{company} </strong> </p>
                    </div>
                </div>
                <p>{review} </p>
            </div>
        </div>
    );
};

export default TestimonialCard;