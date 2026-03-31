import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background pt-24 pb-16">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Icon name="MessageCircle" size={32} className="text-primary" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Start Your Financial
            <span className="text-brand-gradient block">Success Journey</span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business finances? Our expert team is here to provide strategic guidance tailored to your unique needs. Get started with a complimentary consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Response within 2 hours</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-primary" />
              <span>100% Confidential</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} className="text-primary" />
              <span>CPA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;