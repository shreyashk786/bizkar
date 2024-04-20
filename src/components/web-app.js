import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-details';
import Video from './section-components/video-v3';
import FunFact from './section-components/funfact-v5';
import Pricing from './section-components/pricing-v4';
import Testimonial from './section-components/testimonial-v2';
import Brand from './section-components/brand-v4';
import Case from './section-components/case';
import Footer from './global-components/footer-v2';
import Webdetails from './section-components/webdetails';
import Webabout from './section-components/webabout';

const CloudComputing = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Web and App Development"  />
        {/* <Service /> */}
        <Webdetails />
        <Webabout />
        {/* <Video /> */}
        {/* <FunFact /> */}
        {/* <Pricing /> */}
        {/* <Brand /> */}
        {/* <Testimonial /> */}
        <Footer />
    </div>
}

export default CloudComputing

