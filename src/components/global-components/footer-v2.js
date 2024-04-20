import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div className="site-footer-two  go-top">
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-1.png"} alt={imgattr} className="site-footer-two__shape-1" />
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-2.png"} alt={imgattr} className="site-footer-two__shape-2" />
				<div className="site-footer-two__upper">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__about">
									<Link to="/">
										<img src={publicUrl + "assets/images/logo-2-1-1.png"} alt={imgattr} />
									</Link>
									<p>Pioneering Your Path to Excellence with AnaAr Solutions</p>
									<div className="footer-widget__social">
										<a href="https://www.facebook.com/webtend/"><i className="fab fa-facebook-f" /></a>
										<a href="https://www.twitter.com/webtend/"><i className="fab fa-twitter" /></a>
										<a href="https://google.com/webtend"><i className="fab fa-google-plus-g" /></a>
										<a href="https://behance.com/webtend"><i className="fab fa-behance" /></a>
									</div>{/* /.footer-widget__social */}
								</div>{/* /.footer-widget footer-widget__about */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Services</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
										<li><Link to="/cloud-migration">Cloud Migration</Link></li>
										<li><Link to="/digital-transformation">Digital Transformation</Link></li>
										<li><Link to="/ai-ml">AI / ML</Link></li>
										<li><Link to="/web-app">Web & App Development</Link></li>

										
									</ul>{/* /.footer-widget__links-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Quick Links</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
										<li><Link to="/home">Home</Link></li>
										<li><Link to="/about">About us</Link></li>
										<li><Link to="/services">services</Link></li>
										<li><Link to="/contact">Contact</Link></li>

										
									</ul>{/* /.footer-widget__links-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__contact">
									<h3 className="footer-widget__title">Contact</h3>{/* /.footer-widget__title */}
									
									<ul className="footer-widget__contact-list list-unstyled">
									<li>
											<i className="far fa-location" />
											<a href="#">Crabbe Crescent, Chesham, HP5 3DD</a>
										</li>
										<li>
											<i className="far fa-envelope" />
											<a href="mailto:AnaArSolutions@gmail.com">AnaArSolutions@gmail.com</a>
										</li>
										<li>
											<i className="far fa-phone" />
											<a href="tel:+07522405709">07522405709</a>
										</li>
									</ul>{/* /.footer-widget__contact-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
						</div>{/* /.row */}
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__upper */}
				<div className="site-footer-two__bottom">
					<div className="container">
					<p>Copyright@ 2022 <a href="https://anaar.solutions/">AnaAr Solutions</a>. All Right Reserved. Design By <a href="https://shreyash.site/">Shreyash Codes</a></p>

					</div>{/* /.container */}
				</div>{/* /.site-footer-two__bottom */}
			</div>
		)
	}
}


export default Footer_v2