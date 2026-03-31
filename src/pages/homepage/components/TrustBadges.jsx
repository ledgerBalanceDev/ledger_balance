import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {

  const certifications = [
  {
    id: 1,
    name: "QuickBooks Foundations",
    logo: "https://images.unsplash.com/photo-1652180809798-a02daf2742b9",
    logoAlt: "QuickBooks ProAdvisor certification badge with green checkmark and QB logo"
  },
  {
    id: 2,
    name: "QuickBooks Bookkeeping",
    logo: "https://images.unsplash.com/photo-1650900802160-c7cb161ad57a",
    logoAlt: "Xero Certified Advisor badge with blue Xero branding and certification seal"
  },
];


  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container-brand">

        {/* Certifications */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Professional Certifications & Partnerships
            </h3>
            <p className="text-text-secondary">
              Recognized by leading industry organizations and software providers
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications?.map((cert, index) =>
            <div
              key={cert?.id}
              className="group bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-brand transition-all duration-normal hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}>

                <div className="w-full h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors">
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Award" size={24} />
                    <span className="text-sm font-medium">Certified</span>
                  </div>
                </div>
                
                <h4 className="text-sm font-semibold text-foreground text-center">
                  {cert?.name}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TrustBadges;