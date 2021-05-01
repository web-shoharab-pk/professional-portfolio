import React from 'react';

import { useForm } from '@formcarry/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const { state, submit } = useForm({
        id: 'RxCFAtTpM6N'
    });

    // Success message
    if (state.submitted) {
        return <div>Thank you! We received your submission.</div>;
    }
    return (
        <div className="form-floating">

            <form onSubmit={submit}>

                <div className="form-floating mb-3">
                    <input type="email" name="email" required className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="name" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="subject" className="form-control" id="floatingInput" placeholder="subject" />
                    <label>Subject</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" required type="text" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "150px" }}></textarea>
                    <label>Message</label>
                </div>

                <button className="contactBtn" type="submit">
                    Send Message <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </form>

        </div>
    );
};

export default ContactForm;