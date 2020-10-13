import React from 'react';
import "./ContactUs.scss"

const ContactUs = () => {
    return (
        <section className="bg-warning py-5 contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pr-md-5">
                        <h2 className="text-primary">Let us handle your <br /> project professionally.</h2>
                        <p>With well written codes, w build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <input type="email" name="email" className="form-control-lg mb-3 py-4 form-control" placeholder="Your email address" />
                            <input type="text" name="company" placeholder="Your name / company's name" id="" className="form-control-lg mb-3 py-4 form-control" />
                            <textarea placeholder="Your message" name="message" cols="30" rows="8" className="form-control-lg mb-3 py-4 form-control"></textarea>
                            <button className="btn btn-primary px-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;