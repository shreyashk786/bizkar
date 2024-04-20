import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="service-one go-top">
          <div className="container">
            <div className="block-title text-center">
              <p><span>Why Like Us</span></p>
              <h3>Grow your business with <br />
                AnaAr Solutions</h3>
              <div className="block-title__line" />{/* /.block-title__line */}
            </div>{/* /.block-title */}
            <div className="row high-gutter  go-top">
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-1.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">People</Link></h3>
                      <p>Enhancing People</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>Our dedicated team of experts is the driving force behind AnaAr Solutions, committed to delivering excellence</p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-2.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Process</Link></h3>
                      <p>Optimizing Process</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>We implement efficient and streamlined processes that optimize productivity and ensure quality in every project.</p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-3.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Technology</Link></h3>
                      <p>Empowering Technology</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>Leveraging cutting-edge technology, we stay at the forefront of innovation, providing advanced solutions for our clients.</p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>

        }
}

export default WhyChooseUs