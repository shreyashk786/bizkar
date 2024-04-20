import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Aidetails extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-details">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 clearfix">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-ai.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>Unlocking the Power of AI/ML for Your Success: AnaAr Solutions' Transformative Benefits</h3>
			          <p>Harness the potential of Artificial Intelligence and Machine Learning with AnaAr Solutions, and experience an array of benefits that empower your business. Our innovative AI and ML solutions streamline operations, boost productivity, enhance decision-making, and uncover valuable insights, ensuring your competitive edge in the digital era. Join us in the future of intelligent automation and data-driven success.</p>
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default Aidetails