import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Aiabout extends Component {

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
		                <h3>AI/ML Strategy</h3>
		                <p>We start by conducting a thorough assessment of your existing IT infrastructure and business requirements. This analysis forms the basis of a comprehensive cloud migration strategy tailored to your organization.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Model Development</h3>
		                <p> We create, train, and deploy machine learning models tailored to your unique needs, whether it's predictive analytics, recommendation systems, or computer vision applications.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>AI Integration</h3>
		                <p>Our expertise extends to integrating AI into your existing systems and processes, allowing you to leverage AI's capabilities without disrupting your operations.</p>
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
		                <p> We tailor our services to address your specific business challenges and objectives, ensuring that you get solutions that meet your unique needs.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Comprehensive Solutions</h3>
		                <p>Our approach encompasses technology, data, and culture to provide a well-rounded AI/ML implementation that drives transformative results.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Customer-Centric</h3>
		                <p>Your success is our driving force. We are committed to delivering AI and ML solutions that enhance your operational efficiency, customer experiences, and competitive edge.</p>
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

export default Aiabout