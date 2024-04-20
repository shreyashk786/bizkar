import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-two service-two__service-page  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-5">
		        <div className="service-two__block">
		          <div className="block-title-two text-left">
		            <p>Our Services</p>
		            <h3>We Offer Exclusive <br /> Services For You</h3>
		          </div>{/* /.block-title-two */}
		          <p>Experience a world of exclusive services tailored to your unique needs, designed to elevate your business to new heights.</p>
		          <ul className="list-unstyled video-one__list">
		            <li>
		              <i className="far fa-check" />
		              Explore our exclusive cloud computing solutions designed to optimize your data management and streamline your operations
		            </li>
		            <li>
		              <i className="far fa-check" />
					  Embark on a transformative journey with us, where we reshape your business to excel in today's ever-evolving digital landscape.		            </li>
		            <li>
		              <i className="far fa-check" />
					  Discover the potential of AI and ML with our exclusive services, providing data-driven insights and advanced automation for your business.		            </li>
		            <li>
		              <i className="far fa-check" />
					  Elevate your online presence through our exclusive web and mobile app development services, ensuring exceptional user experiences and innovative solutions.		            </li>
		          </ul>{/* /.list-unstyled video-one__list */}
		          <Link to="/service-v2" className="thm-btn">View More <i className="fa fa-angle-double-right" /></Link>
		          {/* /.thm-btn */}
		        </div>{/* /.service-two__block */}
		      </div>{/* /.col-lg-5 */}
		      <div className="col-lg-7">
		        <div className="service-two__box-wrap">
		          <div className="row">
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  {/* <i className="fal fa-hand-holding-usd" /> */}
		                  <h3><Link to="/service-details">Cloud Computing</Link></h3>
		                  <p>Experience the future of computing with our cloud solutions, transforming the way you manage data and operations.</p>
		                  <Link to="/cloud-migration" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  {/* <i className="fal fa-fa-microchip-ai" />  */}
		                  <h3><Link to="/service-details">Digital Transformation</Link></h3>
		                  <p>Join the digital transformation journey with us, reshaping your business to thrive in today's fast-paced digital world.</p>
		                  <Link to="/digital-transformation" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  {/* <i className="fal fa-paper-plane" /> */}
		                  <h3><Link to="/service-details">AI / ML</Link></h3>
		                  <p>Harness the power of AI and ML to unlock insights and automation that drive your business forward.</p>
		                  <Link to="/ai-ml" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		            <div className="col-md-6">
		              <div className="service-two__single js-tilt">
		                <div className="service-two__single-image" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/service-bg-1-1.jpg)'}} />
		                {/* /.service-two__single-image */}
		                <div className="service-two__single-inner">
		                  {/* <i className="fal fa-chart-network" /> */}
		                  <h3><Link to="/service-details">Web and App Development</Link></h3>
		                  <p>Elevate your online presence with our innovative web and mobile app development services, delivering exceptional user experiences.</p>
		                  <Link to="/web-app" className="service-two__link"><i className="fa fa-long-arrow-alt-right" /></Link>
		                  {/* /.service-two__link */}
		                </div>{/* /.service-two__single-inner */}
		              </div>{/* /.service-two__single */}
		            </div>{/* /.col-md-6 */}
		          </div>{/* /.row */}
		        </div>{/* /.service-two__box-wrap */}
		      </div>{/* /.col-lg-7 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default ServiceV5