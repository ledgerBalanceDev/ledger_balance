import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceOverview = () => {
   const services = [
        {
            id: 1,
            icon: "Calculator",
            title: "Starter Package",
            subtitle: "Starting at $200/month",
            description: "(For freelancers and solo entrepreneurs)",
            features: ["Basic bookkeeping", "Financial reporting"],
            color: "primary"
        },
        {
            id: 2,
            icon: "FileText",
            title: "Core Package",
            subtitle: "Starting at $400/month",
            // description: "Monthly Reconciliation Basic Financial port.",
            features: ["Monthly Reconciliation", "Basic Financial port"],
            color: "secondary"
        },
        {
            id: 3,
            icon: "TrendingUp",
            title: "Growth Package",
            subtitle: "Starting at $600/month (full bookkeeping)",
            // description: "Strategic financial guidance that transforms your numbers into actionable business intelligence and growth opportunities.",
            features: ["Reconciliation", "Trust Tracking", "Cash Flow Summary", "Monthly Call"],
            color: "accent"
        },
        {
            id: 4,
            icon: "Shield",
            title: "Clean Up Package",
            subtitle: "Starting at (custom pricing) starting $1,200",
            // description: "Comprehensive workforce management that ensures compliance while optimizing employee costs and satisfaction.",
            features: ["Catch-up bookkeeping ", "Trust account correction ", "Organize books"],
            color: "success"
        }
    ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/5",
        border: "border-primary/20",
        icon: "text-primary",
        hover: "hover:bg-primary/10"
      },
      secondary: {
        bg: "bg-secondary/5",
        border: "border-secondary/20",
        icon: "text-secondary",
        hover: "hover:bg-secondary/10"
      },
      accent: {
        bg: "bg-accent/5",
        border: "border-accent/20",
        icon: "text-accent",
        hover: "hover:bg-accent/10"
      },
      success: {
        bg: "bg-success/5",
        border: "border-success/20",
        icon: "text-success",
        hover: "hover:bg-success/10"
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="container-brand">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Online Bookkeeping Services
                        <span className="text-brand-gradient block mt-2">
                            Built for Growth
                        </span>
                    </h2>
                </div>
            </div>
            <div className='container-brand'>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services?.map((service, index) => {
                        const colors = getColorClasses(service?.color);

                        return (
                            <div
                                key={service?.id}
                                className={`group relative bg-card border ${colors?.border} rounded-xl p-6 transition-all duration-normal ${colors?.hover} hover:shadow-brand cursor-pointer animate-fade-in`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-12 h-12 ${colors?.bg} rounded-lg mb-4`}>
                                    <Icon name={service?.icon} size={24} className={colors?.icon} />
                                </div>
                                {/* Content */}
                                <div className="">
                                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {service?.title}
                                    </h3>
                                    <h3 className="text-xl mb-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {service?.subtitle}
                                    </h3>

                                    <p className="text-text-secondary leading-relaxed">
                                        {service?.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="">
                                        {service?.features?.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-text-secondary">
                                                <Icon name="Check" size={16} className={`mr-2 ${colors?.icon}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Hover Arrow */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Icon name="ArrowUpRight" size={20} className={colors?.icon} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
  );
};

export default ServiceOverview;