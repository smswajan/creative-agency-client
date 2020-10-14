import React from 'react';
import { Spinner } from 'react-bootstrap';

const PageSpinner = () => {
    return (
        <div style={{ height: "100%", width: "100%" }} className="d-flex align-items-center justify-content-center" >
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default PageSpinner;  