import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import emailjs from '@emailjs/browser'; // Import the emailjs-com library

class Contact extends Component {
  // ... (other code in your Contact component)

  // Define a function to handle form submission
  sendEmail = (e) => {
    e.preventDefault();
    
    // Define your email service details (SERVICE_ID, TEMPLATE_ID, and USER_ID)
    const serviceId = 'service_c84jkva';
    const templateId = 'template_n7itdlq';
    const userId = 'KAjyMoAyPD-qrjSsa'; // You can find this in your emailjs.com account

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div>
        {/* ... (existing JSX code) */}
		
        <form action="#" className="contact-two__form" onSubmit={this.sendEmail}>
          <div className="contact-two__block">
            <h3>Get In Touch</h3>
            <p>Sed ut perspiciatis unde omnis iste natus erro voluptat accusantium <br />doloremque laudantium totam rem aperiam eaque</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Full Name" name="user_name" /> {/* Add name attribute */}
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Email Address" name="user_email" /> {/* Add name attribute */}
            </div>
            <div className="col-md-12">
              <input type="text" placeholder="Subject" name="subject" /> {/* Add name attribute */}
            </div>
            <div className="col-md-12">
              <textarea name="message" placeholder="Message" defaultValue={""} />
              <button type="submit" className="thm-btn contact-two__btn">Send Message <i className="fa fa-angle-double-right" /></button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
