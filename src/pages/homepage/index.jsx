import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceOverview from './components/ServiceOverview';
import TrustBadges from './components/TrustBadges';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import logo from '../../assets/logoLB.png'
import OurProcessOverview from './components/OurProcessOverview';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Ledger Balance - Strategic Financial Partnership for Growing Businesses</title>
        <meta
          name="description"
          content="Transform your business with strategic financial guidance. Professional accounting services, tax planning, and business advisory for growing companies. Schedule your free consultation today."
        />
        <meta name="keywords" content="accounting services, tax planning, business advisory, financial consulting, CPA, bookkeeping, strategic financial partnership" />
        <meta property="og:title" content="Ledger Balance - Financial Clarity Drives Business Growth" />
        <meta property="og:description" content="Join 500+ growing businesses that trust Ledger Balance for strategic financial partnership and comprehensive accounting solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ledger Balance - Strategic Financial Partnership" />
        <meta name="twitter:description" content="Professional accounting services that transform financial complexity into clear, actionable business insights." />
        <link rel="canonical" href="https://ledgerbalance.com/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <section id="home">
            <HeroSection />
          </section>

          {/* Service Overview */}
          <section id="services" className="scroll-mt-20">
            <ServiceOverview />
          </section>

          {/* Our Process Overview */}
          <section id="our-process" className="scroll-mt-20">
            <OurProcessOverview />
          </section>

          {/* Call to Action */}
          <section id="contact" className="scroll-mt-20">
            <CTASection />
          </section>

          {/* Trust & Credentials */}
          <section id="trust" className="scroll-mt-20">
            <TrustBadges />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 lg:py-16">
          <div className="container-brand">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <img src={logo} alt="Ledeger Balance" />
                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" fill="currentColor"/>
                    </svg> */}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Ledger Balance</h3>
                    <p className="text-sm opacity-80 text-white">Financial Clarity</p>
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed text-white">
                  Your strategic financial partner for sustainable business growth and financial clarity.
                </p>
              </div>

              {/* Quick Links */}
              <div className="">
                <h4 className="font-semibold">Services</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="#services" className="hover:text-primary transition-colors text-white">Strategic Bookkeeping</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors text-white">Tax Planning</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors text-white">Business Advisory</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors text-white">Payroll Solutions</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="">
                <h4 className="font-semibold">Company</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="/about" className="hover:text-primary transition-colors text-white">About Us</a></li>
                  <li><a href="#our-process" className="hover:text-primary transition-colors text-white">Our Process</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors text-white">Contact</a></li>
                  <li><a href="/get-started" className="hover:text-primary transition-colors text-white">Get Started</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Contact</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <p className='text-white'>786-939-8247</p>
                  <p className='text-white'>carmen@ledgerbalance.org</p>
                  <p className='text-white'>Mon-Fri 8AM-6PM EST</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-sm opacity-80 text-white">
                © {new Date()?.getFullYear()} Ledger Balance LLC. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm opacity-80 text-white">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;