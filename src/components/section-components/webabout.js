import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Webabout extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-four  go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="about-four__content">
		          <div className="block-title-two text-left">
		            <h3>What We Offer </h3>
		          </div>{/* /.block-title-two text-left */}
		         
		          <div className="about-four__box-wrap">
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Web Development</h3>
		                <p> We create visually stunning, responsive websites that not only captivate your audience but also deliver a seamless user experience. From e-commerce sites to informative corporate pages, we handle it all.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>App Development</h3>
		                <p> We design and develop mobile applications that engage users and offer tangible value. Our team is well-versed in developing apps for iOS, Android, and cross-platform solutions.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>E-commerce Solutions</h3>
		                <p> For businesses looking to enter the world of online selling, we offer customized e-commerce solutions, complete with secure payment gateways.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		          </div>{/* /.about-four__box-wrap */}
		        </div>{/* /.about-four__content */}
		      </div>{/* /.col-lg-6 */}
		      <div className="col-lg-6">
		        <div className="about-four__content">
		          <div className="block-title-two text-left">
		            <h3>Why Choose Us</h3>
		          </div>{/* /.block-title-two text-left */}
		         
		          <div className="about-four__box-wrap">
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Customization</h3>
		                <p>We tailor our services to address your specific business requirements and objectives, ensuring you get a solution that meets your unique needs.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Comprehensive Solutions</h3>
		                <p>Our approach encompasses technology, design, and user experience to provide a holistic digital solution that stands out in a crowded market.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Customer-Centric</h3>
		                <p>Your success is our priority. We are committed to delivering web and app solutions that enhance your brand, reach, and user engagemen.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		          </div>{/* /.about-four__box-wrap */}
		        </div>{/* /.about-four__content */}
		      </div>{/* /.col-lg-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>

        }
}

export default Webabout