import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import About from './section-components/about';
import FunfactV4 from './section-components/funfact-v4';
import Cta from './section-components/cta-v9';
import Team from './section-components/team-v2';
import Testimonial from './section-components/testimonial-style-one';
import Brand from './section-components/brand-v4';
import Footer from './global-components/footer-v2';
import Skill from './section-components/skill';


const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <Skill />

        <About />


        {/* <Team /> */}
        {/* <Testimonial /> */}
        {/* <Brand /> */}
        {/* <AboutV6 /> */}
        <Footer />
    </div>
}

export default AboutPage

