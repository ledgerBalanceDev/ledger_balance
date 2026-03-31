import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-primary/5 pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-brand relative">
        <div className="flex flex-row w-full gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="w-full space-y-8 animate-fade-in">
            <div className="space-y-6">
              
              <h1 className=" text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Financial{' '}
                <span className="text-brand-gradient">Clarity</span>{' '}
               <br /> Drives Business{' '}
                <span className="text-brand-gradient">Growth</span>
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
                We’re not just your bookkeeper — we’re a reliable partner you can trust with your numbers.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="text-sm font-medium text-text-secondary">QBO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="text-sm font-medium text-text-secondary">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-primary" />
                <span className="text-sm font-medium text-text-secondary">100% Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;