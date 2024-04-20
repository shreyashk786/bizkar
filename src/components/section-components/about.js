import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="service-two service-two__service-page service-two__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="service-two__image">
			          <img src={publicUrl+"assets/images/resources/about-page-moc-1.png"} alt={ imagealt } />
			        </div>{/* /.service-two__image */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-two__block">
			          <div className="block-title-two text-left">
			            <p>about us</p>
			            <h3>Exclusive Agency To <br /> Provide Soluation</h3>
			          </div>{/* /.block-title-two */}
			          <p>
AnaAr Solutions is your exclusive agency dedicated to providing cutting-edge solutions. With a relentless commitment to innovation and excellence, we aim to meet your unique needs with tailored solutions that drive success. Our team of experts combines deep industry knowledge with a forward-thinking approach, ensuring that we're always ahead of the curve in delivering the most effective solutions for your business. Trust us to be your partner in achieving your goals, and let AnaAr Solutions pave the way to your future success. </p>
			          <ul className="list-unstyled video-one__list">
			            <li>
			              <i className="far fa-check" />
						  AnaAr Solutions is your exclusive agency for providing cutting-edge solutions.
						</li>
			            <li>
			              <i className="far fa-check" />
			              We specialize in delivering innovative and tailored solutions to meet your unique needs.
			            </li>
			            <li>
			              <i className="far fa-check" />
			              With a strong commitment to excellence, we're your trusted partner in problem-solving.
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Count on us to bring your vision to life and make your challenges a thing of the past.
			            </li>
			          </ul>{/* /.list-unstyled video-one__list */}
			          {/* <Link to="/service" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link> */}
			          {/* /.thm-btn */}
			        </div>{/* /.service-two__block */}
			      </div>{/* /.col-lg-5 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>



        }
}

export default AboutPage