import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';

import Footer from './global-components/footer-v2';
import Redirect from './section-components/redirect-page';

const PricingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Redirect"  />
     
        <Redirect />
        <Footer />
    </div>
}

export default PricingPage

