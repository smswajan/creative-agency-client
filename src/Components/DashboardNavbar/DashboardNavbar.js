import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useAuth } from '../../Hooks/useAuth';
import { LogoBrand } from '../../images';
import "./DashboardNavbar.scss"
import Avatar from 'react-avatar';

const AdminNavbar = ({ pageTitle }) => {
    const { currentUser } = useAuth();

    return (
        <>
            <div className="d-flex bg-white py-3 align-items-center">
                <div className="width-side pl-5"><a href="/"><img src={LogoBrand} alt="creative-agency" className="admin-logo" /> </a></div>
                <div className="width-main d-flex justify-content-between align-items-center px-5">
                    <h4 className="mb-0">{pageTitle} </h4>
                    <div className="d-flex align-items-center">
                        <p className="font-weight-bold mb-0 mr-4">{currentUser ? currentUser.name : "None"} </p>

                        {currentUser && <Avatar googleId="118096717852922241760" src={currentUser.photo} size="60" round={true} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminNavbar;