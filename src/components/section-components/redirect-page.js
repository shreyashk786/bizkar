import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Redirect extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return	<section className="service-three  go-top">
		  <div className="container">
		    <div className="block-title-two text-center">
		      <h3>We Are Professional Services <br /> Provider. We Are Very Unique, Clean <br /> Simple &amp; Modern</h3>
		    </div>{/* /.block-title-two text-center */}
		    <div className="row">
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-cloud" />
		          <h3><Link to="/service-details">Cloud Computing</Link></h3>
		          <p>AnaAr Solutions leverages the power of cloud computing to streamline your operations, enhance scalability, and ensure data security, transforming the way you do business.</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-digital-ocean" />
		          <h3><Link to="/service-details">Digital Transformation</Link></h3>
		          <p>At AnaAr Solutions, we drive digital transformation strategies tailored to your unique needs, enabling you to thrive in the ever-evolving digital landscape.</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-laptop-code" />
		          <h3><Link to="/service-details">AI / ML</Link></h3>
		          <p>Unlock the potential of AI and ML with AnaAr Solutions, where we harness the latest technologies to deliver data-driven insights and automation for your business.</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-xl-3 col-lg-6">
		        <div className="service-three__single">
		          <i className="fal fa-database" />
		          <h3><Link to="/service-details">Web and App Development </Link></h3>
		          <p>AnaAr Solutions creates innovative, user-friendly web and mobile applications that elevate your online presence and provide exceptional user experiences.</p>
		        </div>{/* /.service-three__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>


        }
}

export default Redirect