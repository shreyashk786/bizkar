import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v3';
import Service from './section-components/service-v5';
import AboutV3 from './section-components/about-v3';
import AboutV4 from './section-components/about-v4';
import Funfact from './section-components/funfact-v3';
import Video from './section-components/video-v2';
import AboutV5 from './section-components/about-v5';
import Testimonial from './section-components/testimonial-v3';
import Faq from './section-components/faq';
import Pricing from './section-components/pricing-v2';
import BlogPost from './section-components/blog-post-v2';
import Cta from './section-components/cta-v11';
import SocialCounter from './section-components/social-counter';
import Footer from './global-components/footer-v2';
import Service4 from './section-components/service-v4';
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleTwo from './section-components/about-style-two';
import AboutStyleOne from './section-components/about-style-one';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <WhyChooseUs />
        <AboutStyleOne />
        <Service />
        {/* <AboutV5 /> */}
       
        {/* <AboutV3 /> */}
        {/* <AboutV4 /> */}
       

        {/* <Funfact /> */}
        {/* <Video /> */}
        {/* <AboutV5 /> */}
        {/* <Testimonial /> */}
        {/* <Faq /> */}
        {/* <Pricing /> */}
        {/* <BlogPost /> */}
        <Cta />
        {/* <SocialCounter /> */}
        <Footer />
    </div>
}

export default Home_V1

