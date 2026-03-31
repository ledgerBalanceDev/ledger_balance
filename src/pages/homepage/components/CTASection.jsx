import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {

  const urgencyFactors = [
    {
      id: 1,
      text: "Tax season is approaching - optimize your strategy now",
      icon: "Clock"
    },
    {
      id: 2,
      text: "Limited consultation slots available this month",
      icon: "Users"
    },
    {
      id: 3,
      text: "Early planning saves an average of $15K annually",
      icon: "DollarSign"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="container-brand relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center space-y-8 mb-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                <Icon name="Zap" size={16} className="mr-2" />
                Ready to Get Started?
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Transform Your Business with{' '}
                <span className="text-brand-gradient">Strategic Financial Partnership</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Join 500+ growing businesses that have unlocked their potential through our 
                comprehensive financial solutions. Your journey to financial clarity starts here.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>100% confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Quick 24hr response</span>
              </div>
            </div>
          </div>
         

          {/* Urgency Section */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 bg-warning/10 border border-warning/20 rounded-full">
                  <Icon name="Clock" size={28} className="text-warning" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Don't Wait - Act Now for Maximum Impact
              </h3>
              
              <div className="space-y-4 max-w-2xl mx-auto">
                {urgencyFactors?.map((factor, index) => (
                  <div
                    key={factor?.id}
                    className="flex items-center justify-center space-x-3 text-text-secondary animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Icon name={factor?.icon} size={20} className="text-primary flex-shrink-0" />
                    <span className="text-center">{factor?.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Secondary CTA */}
              <div className="pt-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  asChild
                >
                  <Link to="/get-started">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Claim Your Free Consultation Today
                  </Link>
                </Button>
              </div>
              
              <p className="text-sm text-text-secondary">
                Limited availability - Only 5 consultation slots remaining this week
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-text-secondary">
              Prefer to speak directly? We're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="font-medium text-foreground">786-939-8247</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="font-medium text-foreground">carmen@ledgerbalance.org</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-text-secondary">Mon-Fri 8AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;