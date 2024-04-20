import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Video from './section-components/video-v3';
import FunFact from './section-components/funfact-v5';
import Pricing from './section-components/pricing-v4';
import Testimonial from './section-components/testimonial-v2';
import Brand from './section-components/brand-v4';
import Case from './section-components/case';
import Footer from './global-components/footer-v2';
import Service from './section-components/service-v5';

const ServiceV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Service Details"  />
        <Service />

        <Footer />
    </div>
}

export default ServiceV1

