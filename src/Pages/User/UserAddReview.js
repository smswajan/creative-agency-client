import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import AdminSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import sideBarItems from '../../Components/DashboardSidebar/SideBarData';
import { useAuth } from '../../Hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const { currentUser } = useAuth();
    let sideBarData = sideBarItems;
    sideBarData[2].status = " active";
    const onSubmit = (data, e) => {
        data.timeStamp = new Date();
        data.userImage = currentUser.photo;
        fetch('https://creative-agency-live-api.herokuapp.com/add-review', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(result => {
            e.target.reset()
        })
    }
    document.title = "Add Review";
    return (
        <div>
            <AdminNavbar pageTitle="Add Review" />
            <div className="d-flex">
                <div className="width-side">
                    <AdminSidebar sideBarItems={sideBarData} />
                </div>
                <div className="width-main bg-admin px-4 py-5">
                    <div className="width-main pt-3 pl-4">
                        <div className="row pt-3 pl-4">
                            <div className="col-7">
                                <form onSubmit={handleSubmit(onSubmit)} className="order-form">
                                    <input ref={register({ required: true })} type="text" defaultValue={currentUser.name} name="name" className="form-control-lg mb-3 py-4 form-control" placeholder="Your name" />
                                    <input ref={register({ required: true })} type="text" name="company" placeholder="Company's name, Designation" id="" className="form-control-lg mb-3 py-4 form-control" />
                                    <textarea ref={register({ required: true })} placeholder="Your feedback" name="review" cols="30" rows="4" className="form-control-lg mb-3 py-4 form-control mb-5"></textarea>

                                    <button type="submit" className="btn btn-primary px-5 py-3">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;