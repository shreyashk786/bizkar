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
import Aidetails from './section-components/aidetails';
import Aiabout from './section-components/aiabout';

const CloudComputing = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="AI / ML"  />
        {/* <Service /> */}
        <Aidetails />
        <Aiabout />
        {/* <Video /> */}
        {/* <FunFact /> */}
        {/* <Pricing /> */}
        {/* <Brand /> */}
        {/* <Testimonial /> */}
        <Footer />
    </div>
}

export default CloudComputing

