import React from 'react';
import { Spinner } from 'react-bootstrap';
import "./SectionSpinner.scss"

const SectionSpinner = () => {
    return (
        <div className="section-spinner d-flex align-items-center justify-content-center">
            <Spinner variant="primary" animation="grow" />
        </div>
    );
};

export default SectionSpinner;