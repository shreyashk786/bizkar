import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Digitaldetails extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-details">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 clearfix">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-digital.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>Unlocking the Power of Digital Transformation with AnaAr Solutions</h3>
			          <p>Experience a seamless transition to the digital age with AnaAr Solutions, reaping the rewards of enhanced efficiency, agility, and innovation. Our digital transformation services empower your business to stay competitive in a rapidly evolving landscape, with a focus on cost reduction, improved customer experiences, and optimized operations. Join us on the journey to unlock the full potential of your organization through the digital transformation expertise of AnaAr Solutions.</p>
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			
			  </div>{/* /.container */}
			</section>




        }
}

export default Digitaldetails