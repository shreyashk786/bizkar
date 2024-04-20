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
import Clouddetails from './section-components/cloud-details';
import AboutV4 from './section-components/about-v4';
import Cloudabout from './section-components/cloudabout';
const CloudMigration = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Cloud Migration"  />
        {/* <Service /> */}
        <Clouddetails />
        {/* <AboutV4 />  */}
        <Cloudabout />

        {/* <Video /> */}
        {/* <FunFact /> */}
        {/* <Pricing /> */}
        {/* <Brand /> */}
        {/* <Testimonial /> */}
        <Footer />
    </div>
}

export default CloudMigration

