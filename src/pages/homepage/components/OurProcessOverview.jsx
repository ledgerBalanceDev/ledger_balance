import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessOverview = () => {
  const processHighlights = [
    {
      icon: "PhoneCall",
      title: "STEP 1: Call Us Today",
      description: "Call us or submit a contact request and we’ll reach out to you to learn more about your bookkeeping needs. 786-939-8247"
    },
    {
      icon: "SearchCheck",
      title: "STEP 2: Assess & Estimate",
      description: "We’ll review all current accounts in depth to determine a timeline and an upfront one-time or monthly estimate."
    },
    {
      icon: "Handshake",
      title: "STEP 3: We Work Together",
      description: "You no longer stress about being prepared for tax season and you know exactly where your money is going."
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
          Our <span className="text-brand-gradient">Process</span>
        </h1>
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          A systematic, transparent approach to transforming your financial operations. 
          We believe in clarity at every step, ensuring you understand exactly how we'll 
          drive your business toward financial success.
        </p>
      </div>
      {/* Process Highlights */}
      <div className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processHighlights?.map((highlight, index) => (
          <div key={index} className="floating-card p-6 text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-normal">
              <Icon name={highlight?.icon} size={28} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {highlight?.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {highlight?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessOverview;