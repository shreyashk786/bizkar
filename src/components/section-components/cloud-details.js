import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Clouddetails extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-details">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 clearfix">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-1.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>Unlock the Power of Cloud Migration with AnaAr Solutions</h3>
			          <p>At AnaAr Solutions, we recognize the transformative potential of cloud computing in today's digital landscape. Our expert team is dedicated to helping businesses harness the full capabilities of cloud technology, whether it's for scalable infrastructure, data storage, or seamless application deployment. We offer tailored cloud solutions designed to optimize performance, enhance security, and reduce operational costs. With AnaAr Solutions as your cloud computing partner, you can ensure that your organization is equipped with the most advanced and reliable cloud services to drive innovation and competitiveness in the modern era.</p>
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  
			  </div>{/* /.container */}
			</section>

        }
}

export default Clouddetails