import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Digitalabout extends Component {

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
		                <h3>Digital Strategy</h3>
		                <p>We craft custom digital strategies that align with your business objectives and market dynamics, ensuring a clear roadmap for your digital transformation journey.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Change Management</h3>
		                <p>A successful digital transformation requires a shift in mindset and culture. We assist in driving change and ensuring that your workforce adapts to new technologies seamlessly.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Technology Implementation</h3>
		                <p> We provide end-to-end support in implementing cutting-edge digital solutions, including IoT, AI, cloud, and more, designed to optimize your operations, enhance customer experiences, and drive efficiency.</p>
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
		                <h3>Customized Solutions</h3>
		                <p> We tailor our services to address your specific challenges and objectives, ensuring that you get the results you need.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Holistic Approach</h3>
		                <p>We take a comprehensive view of digital transformation, covering technology, culture, and processes to deliver a well-rounded solution.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Customer-Centric</h3>
		                <p>OYour success is our priority. We are committed to delivering solutions that enhance customer experiences and drive customer loyalty.</p>
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

export default Digitalabout