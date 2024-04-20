import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Cloudabout extends Component {

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
		                <h3>Assessment and Strategy</h3>
		                <p>We start by conducting a thorough assessment of your existing IT infrastructure and business requirements. This analysis forms the basis of a comprehensive cloud migration strategy tailored to your organization.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Migration and Implementation</h3>
		                <p>We take care of the technical details, managing the migration process, transferring applications, data, and workloads to the cloud, all while ensuring minimal downtime and data security.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Optimization and Ongoing Support:</h3>
		                <p>Our commitment doesn't end with the migration. We continue to work with you post-migration, offering cloud optimization services, cost management strategies, and ongoing support to ensure you harness the full potential of cloud technology.</p>
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
		                <h3>Client-Centric</h3>
		                <p> We prioritize your unique needs and goals, working closely with you to design and execute a migration strategy that fits your business.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Security</h3>
		                <p>Data security and compliance are our top priorities. Rest assured, your data will be handled with the utmost care.</p>
		              </div>{/* /.about-four__box-content */}
		            </div>{/* /.about-four__box */}
		            <div className="about-four__box">
		              <div className="about-four__box-icon">
		              </div>{/* /.about-four__box-icon */}
		              <div className="about-four__box-content">
		                <h3>Continuous Support</h3>
		                <p>Our commitment extends beyond migration. We offer ongoing support to help you optimize your cloud environment and stay ahead in an ever-evolving technology landscape.</p>
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

export default Cloudabout