import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import IntelligentContactForm from './components/IntelligentContactForm';
import OfficeLocation from './components/OfficeLocation';
import TrustSignals from './components/TrustSignals';
import FAQ from './components/FAQ';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Ledger Balance | Expert Accounting Services</title>
        <meta 
          name="description" 
          content="Get in touch with Ledger Balance for expert accounting services. Schedule a free consultation, call us directly, or visit our NYC office. Professional CPA services with 2-hour response time." 
        />
        <meta name="keywords" content="contact accountant, CPA consultation, accounting services NYC, financial advisor contact, business accounting help" />
        <meta property="og:title" content="Contact Ledger Balance - Your Strategic Financial Partner" />
        <meta property="og:description" content="Ready to transform your business finances? Contact our expert CPA team for strategic financial guidance. Free consultation available." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ContactHero />
          <ContactMethods />
          <IntelligentContactForm />
          <TrustSignals />
          <OfficeLocation />
          <FAQ />
        </main>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container-brand text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses who trust Ledger Balance with their financial future. Your success story starts with a simple conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors duration-normal font-semibold">
                Schedule Free Consultation
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors duration-normal font-semibold">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="container-brand">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Ledger Balance</h3>
                <p className="text-gray-300 mb-4">
                  Your strategic financial partner for business growth and success. Professional accounting services with a focus on clarity and results.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span>© {new Date()?.getFullYear()} Ledger Balance</span>
                  <span>•</span>
                  <span>All rights reserved</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                  <li><a href="/our-process" className="hover:text-primary transition-colors">Our Process</a></li>
                  <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="/get-started" className="hover:text-primary transition-colors">Get Started</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>(555) 123-4567</li>
                  <li>hello@ledgerbalance.com</li>
                  <li>123 Financial District<br />New York, NY 10004</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;