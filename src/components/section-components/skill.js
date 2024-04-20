import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Skill extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="progress-one">
			  <img src={publicUrl+"assets/images/shapes/progress-bg-1.png"} alt={ imagealt } className="progress-one__bg" />
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/progress-1-1.png"} alt={ imagealt } className="progress-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="progress-one__content">
			          <div className="block-title text-left">
			            <p><span>Our Skills</span></p>
			            <h3>know Everything About <br /> Professional Skills</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>Transformation Management Consultancy. Headquartered in London with clients in the United Kingdom and the Middle East. We’re in the business of delivering change. We provide experienced and expert consultants to help transform your business, whether it’s organisational design, operating model updates, project and portfolio management or introducing new technology from cloud migrations to software design and development.

We’ve worked with some of the top finance institutions in the UK and across a number of other industries including Telecoms, Retail and Media. We’ve delivered award-winning apps, groundbreaking products, revenue generation and cost savings for our customers. We’ve managed budgets of up to £40M for some clients and provided short-term economical PMO resources for others.  Our leadership team are industry experts who’ve worked on the cutting edge of digital transformation and offer tailored management consulting to help your business grow and deliver successful change. 

With our head office in London and offshore partners in the Middle East and India we can deliver fast on the ground resource allocation to your business from PMO experts to strategy consultants working alongside your C-section to develop, plan and execute your digital roadmaps. 

Experienced in Agile transformations for multinational organisations, restructuring traditional development teams into focused, faster and more productive Agile teams. Training product professionals in the creation of agile and prioritised feature roadmaps. Helping you deliver change to your customers and your organisation.</p>
			          <div className="progress-one__progress-wrap">
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Cloud Migration</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#3f02a8'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Digital Transformation</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '87%', backgroundColor: '#ff57a4'}}>
			                  <b>87%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Artificial intelligence and Machine learning</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '73%', backgroundColor: '#00c8b3'}}>
			                  <b>73%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Web and App Development</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '85%', backgroundColor: '#ff9b0d'}}>
			                  <b>85%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
						
			          </div>{/* /.progress-one__progress-wrap */}
			        </div>{/* /.progress-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row justify-content-end */}
			  </div>{/* /.container */}
			</section>


        }
}

export default Skill