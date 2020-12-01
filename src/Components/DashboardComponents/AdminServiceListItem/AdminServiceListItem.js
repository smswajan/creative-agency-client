import React from 'react';
import { useState, useEffect } from 'react';

const AdminServiceListItem = ({ orderDetails }) => {
    const { _id, category, details, email, name, status } = orderDetails;
    const [orderStatus, setOrderStatus] = useState(status);
    const [services, setServices] = useState([]);
    const [serviceName, setServiceName] = useState(null)
    useEffect(() => {
        fetch('https://creative-agency-live-api.herokuapp.com/services', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setServices(result)
                setServiceName(result.find(item => item._id === category).title)
            })
    }, [])
    const updateOrder = (e) => {
        const currentStatus = e.target.value
        setOrderStatus(currentStatus);
        fetch('https://creative-agency-live-api.herokuapp.com/update-order/' + _id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ currentStatus })
        }).then(res => res.json())
            .then(result => {
                console.log("Done");
            })
    }
    const textClass = orderStatus === "Pending" ? "danger" : orderStatus === "OnGoing" ? "warning" : "success"
    return (
        <>
            <div className="row py-2 px-3 mb-3" style={{ borderRadius: "10px" }}>
                <div className="col-2"><span className="">{name}</span> </div>
                <div className="col-3"><span className="">{email} </span> </div>
                <div className="col-2"><span className="">{serviceName ? serviceName : category} </span> </div>
                <div className="col-3"><span className="">{details} </span> </div>
                <div className="col-2">
                    <select name="status" className={"custom-select text-" + textClass} onChange={(e) => updateOrder(e)} >
                        <option value={status} className={"text-" + textClass} >{status}</option>
                        <option value="Pending" className="text-danger">Pending</option>
                        <option value="OnGoing" className="text-warning">OnGoing</option>
                        <option value="Done" className="text-success">Done</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default AdminServiceListItem;