import React from 'react';
import ContactHero from '../../contact/components/ContactHero';
import ContactMethods from '../../contact/components/ContactMethods';
import IntelligentContactForm from '../../contact/components/IntelligentContactForm';
import OfficeLocation from '../../contact/components/OfficeLocation';
import TrustSignals from '../../contact/components/TrustSignals';
import FAQ from '../../contact/components/FAQ';

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <ContactHero />
      <ContactMethods />
      <IntelligentContactForm />
      <TrustSignals />
      <OfficeLocation />
      <FAQ />
    </section>
  );
};

export default ContactSection;
