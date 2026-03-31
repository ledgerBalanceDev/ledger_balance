import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const credentials = [
  {
    id: 1,
    icon: "Award",
    title: "CPA Certified",
    description: "Licensed Certified Public Accountants with 15+ years experience"
  },
  {
    id: 2,
    icon: "Shield",
    title: "Fully Insured",
    description: "Professional liability insurance up to $2M for your protection"
  },
  {
    id: 3,
    icon: "Users",
    title: "500+ Clients",
    description: "Trusted by businesses across various industries nationwide"
  },
  {
    id: 4,
    icon: "Clock",
    title: "24/7 Support",
    description: "Emergency financial support available when you need it most"
  }];


  const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovations LLC",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868",
    avatarAlt: "Professional headshot of woman with brown hair in navy blazer smiling at camera",
    rating: 5,
    text: "Ledger Balance transformed our financial processes. Their strategic guidance helped us increase profitability by 40% in just one year."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Rodriguez Construction",
    role: "Owner",
    avatar: "https://images.unsplash.com/photo-1724128195747-dd25cba7860f",
    avatarAlt: "Professional headshot of Hispanic man with short black hair in navy suit",
    rating: 5,
    text: "The team\'s expertise in construction accounting saved us thousands in tax optimization. Highly recommend their services."
  },
  {
    id: 3,
    name: "Emily Chen",
    company: "Bloom Marketing Agency",
    role: "Founder",
    avatar: "https://images.unsplash.com/photo-1560859389-c4fb2bd88016",
    avatarAlt: "Professional headshot of Asian woman with long black hair in white blouse",
    rating: 5,
    text: "From startup to scaling, Ledger Balance has been our trusted financial partner every step of the way."
  }];


  const awards = [
  {
    id: 1,
    title: "Best Accounting Firm 2023",
    organization: "NYC Business Awards",
    image: "https://images.unsplash.com/photo-1593660363889-81682b181456",
    imageAlt: "Gold trophy award on dark background with spotlight"
  },
  {
    id: 2,
    title: "Top CPA Practice",
    organization: "Financial Excellence Awards",
    image: "https://images.unsplash.com/photo-1613825787146-9da8246a1a94",
    imageAlt: "Silver medal with ribbon on white background"
  },
  {
    id: 3,
    title: "Client Satisfaction Leader",
    organization: "Professional Services Review",
    image: "https://images.unsplash.com/photo-1609961934681-0940669cd408",
    imageAlt: "Bronze certificate with official seal and signature"
  }];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={16}
      className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"} />

    );
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-brand">
        {/* Credentials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Businesses Nationwide
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
            Our credentials, experience, and client satisfaction speak for themselves. Join hundreds of successful businesses who trust us with their financial future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials?.map((credential) =>
            <div key={credential?.id} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={credential?.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{credential?.title}</h3>
                <p className="text-sm text-text-secondary">{credential?.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-text-secondary">
              Real feedback from real businesses we've helped succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) =>
            <div key={testimonial?.id} className="bg-card rounded-xl p-6 shadow-brand">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial?.rating)}
                </div>
                
                <p className="text-text-secondary mb-6 italic">
                  "{testimonial?.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover" />

                  <div>
                    <p className="font-semibold text-foreground">{testimonial?.name}</p>
                    <p className="text-sm text-text-secondary">
                      {testimonial?.role}, {testimonial?.company}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Awards & Recognition
          </h3>
          <p className="text-text-secondary mb-8">
            Industry recognition for excellence in accounting services
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {awards?.map((award) =>
            <div key={award?.id} className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm">
                <Image
                src={award?.image}
                alt={award?.imageAlt}
                className="w-12 h-12 object-cover rounded" />

                <div className="text-left">
                  <p className="font-medium text-foreground text-sm">{award?.title}</p>
                  <p className="text-xs text-text-secondary">{award?.organization}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-text-secondary">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-text-secondary">Client Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
            <div className="text-sm text-text-secondary">Managed Assets</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustSignals;