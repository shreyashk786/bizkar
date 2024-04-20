import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Webdetails extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return	<section className="service-details">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 clearfix">
			        <img src={publicUrl+"assets/images/resources/service-d-moc-web.png"} alt={ imagealt } className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-details__content">
			          <h3>Unlocking the Power of Web and App Development with AnaAr Solutions</h3>
			          <p>AnaAr Solutions is a dynamic, forward-thinking technology company specializing in web and app development. Our passionate team of experts is dedicated to crafting innovative digital solutions that empower businesses to thrive in the digital landscape. With a relentless commitment to cutting-edge technologies and an unwavering focus on client satisfaction, we deliver tailor-made websites and mobile applications that not only meet but exceed your expectations. Whether you're a startup looking to make your mark or an established enterprise seeking to revamp your digital presence, AnaAr Solutions is your trusted partner on the journey to digital success.</p>
			        </div>{/* /.service-details__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			
			  </div>{/* /.container */}
			</section>

        }
}

export default Webdetails