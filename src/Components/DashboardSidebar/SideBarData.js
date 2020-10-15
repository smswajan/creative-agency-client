import React from 'react';
import { BiCart, BiShoppingBag } from 'react-icons/bi'
import { MdRateReview } from 'react-icons/md';

const biC = <BiCart className="sidebar-icon" />
const biShoppingBag = <BiShoppingBag className="sidebar-icon" />
const mdRate = <MdRateReview className="sidebar-icon" />
const sideBarItems = [
    {
        id: 1,
        icon: biC,
        text: "Order",
        url: "/orders"

    },
    {
        id: 2,
        icon: biShoppingBag,
        text: "Service list",
        url: "/services"
    },
    {
        id: 3,
        icon: mdRate,
        text: "Review",
        url: "/reviews"

    },
];

export default sideBarItems;