import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleOne extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-one  go-top">
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/cta-1-1.png"} alt={ imagealt } className="about-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="about-one__content">
			          <div className="block-title text-left">
			            <p><span>About Us</span></p>
						 
			            <h3>We are specialised in providing <br /> and delivering business solution</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>At AnaAr Solutions, we specialize in providing comprehensive business solutions. Our mission is to empower organizations by delivering tailor-made strategies and services that drive growth and success. We understand that the business landscape is constantly evolving, and that's why we're dedicated to staying at the forefront of innovation.</p>
			          <h4>We Are Always With You</h4>
			          <p>We're more than just service providers; we're your dedicated partners in your journey to success. We believe in a collaborative approach, working closely with you to understand your unique needs and challenges. This commitment means we're with you every step of the way, ensuring that you receive the support and guidance you deserve.</p>
			          <Link to="/about" className="thm-btn about-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn */}
			        </div>{/* /.about-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default AboutStyleOne