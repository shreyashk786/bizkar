import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           <div>
			  <header className="site-header-two site-header-two__home-three go-top">
			    <nav className="main-nav__two stricky">
			      <div className="container">
			        <div className="main-nav__logo-box">
			          <Link to="/">
			            <img src={publicUrl+"assets/images/logo-2-1.png"} alt={ imgattr } />
			          </Link>
			        </div>{/* /.main-nav__logo-box */}
			        <div className="main-nav__main-navigation">
			          <ul className=" main-nav__navigation-box">
					  <li>
			              <Link to="/">Home</Link>
			            </li>
			       
			          <li>
			            <Link to="/about">About</Link>
			          </li>
			          <li className="dropdown">
			            <a href="#services">Services</a>
			            <ul>
						<li><Link to="/cloud-computing">Cloud computing</Link></li>
						<li><Link to="/digital-transformation">Digital Transformation</Link></li>
						<li><Link to="/ai-ml">AI / ML</Link></li>
						<li><Link to="/web-app">Web and App Development</Link></li>




			              <li><Link to="/service-details">Services Details</Link></li>
			            </ul>{/* /.sub-menu */}
			          </li>


				           




			            <li>
			               <Link to="/contact">Contact</Link>
			             </li>
			          </ul>
			        </div>{/* /.main-nav__main-navigation */}
			        <div className="main-nav__right">
			          <a href="#" className="side-menu__toggler"><span /></a>
			        </div>{/* /.main-nav__right */}
			      </div>{/* /.container */}
			    </nav>{/* /.main-nav__one */}
			  </header>
			</div>

        )
    }
}


export default NavbarV3