import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us Directly",
      description: "Speak with our accounting experts immediately",
      value: "(555) 123-4567",
      action: "Call Now",
      available: "Mon-Fri 8AM-6PM EST",
      primary: true
    },
    {
      id: 2,
      icon: "Mail",
      title: "Email Support",
      description: "Send us your questions and we\'ll respond quickly",
      value: "hello@ledgerbalance.com",
      action: "Send Email",
      available: "24/7 - Response within 2 hours",
      primary: false
    },
    {
      id: 3,
      icon: "Calendar",
      title: "Schedule Consultation",
      description: "Book a free 30-minute strategy session",
      value: "Available slots this week",
      action: "Book Meeting",
      available: "Flexible scheduling available",
      primary: true
    },
    {
      id: 4,
      icon: "MessageSquare",
      title: "Live Chat",
      description: "Get instant answers to your questions",
      value: "Chat with our team",
      action: "Start Chat",
      available: "Mon-Fri 9AM-5PM EST",
      primary: false
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the communication method that works best for you. We're committed to providing prompt, professional responses through every channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`floating-card p-6 transition-all duration-normal hover:scale-105 ${
                method?.primary ? 'ring-2 ring-primary/20 bg-primary/5' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  method?.primary ? 'bg-primary text-white' : 'bg-muted text-primary'
                }`}>
                  <Icon name={method?.icon} size={24} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {method?.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    {method?.description}
                  </p>
                  <p className="text-foreground font-medium mb-3">
                    {method?.value}
                  </p>
                  <p className="text-xs text-text-secondary mb-4">
                    {method?.available}
                  </p>
                  
                  <Button
                    variant={method?.primary ? "default" : "outline"}
                    size="sm"
                    className={method?.primary ? "bg-primary hover:bg-primary/90" : ""}
                    iconName={method?.icon}
                    iconPosition="left"
                  >
                    {method?.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;